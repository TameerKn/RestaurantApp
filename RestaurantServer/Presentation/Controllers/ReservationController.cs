using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantServer.Core.Models;
using RestaurantServer.Infrastructure.Data;
using System.Diagnostics.Metrics;
using System.Runtime.CompilerServices;
using System.Security.Claims;

namespace RestaurantServer.Presentation.Controllers
{
    [Route("[controller]s")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private RestaurantDbContext _context;
        public ReservationController(RestaurantDbContext restaurantDbContext)
        {
            _context = restaurantDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Reservation reservation)
        {
            Claim? userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "_id");
            reservation.UserId = userIdClaim?.Value;

            _context.Reservations.Add(reservation);

            reservation.ReservationUsers = new List<ReservationUser>
            {
            new ReservationUser
            {
            UserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ??
            User.FindFirst("_id")?.Value,
            ReservationId = reservation.Id
            }
            };
            await _context.SaveChangesAsync();
            return Ok(reservation);

        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Reservation> result = await _context.Reservations.ToListAsync();
                if (result == null)
                {
                    return Ok(new List<Reservation>());
                }
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpGet("myreservations")]
        [Authorize] 
        public async Task<IActionResult> GetAllMyReservations()
        {
            try
            {
                var userId = User.FindFirst("_id")?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("User ID not found in token");
                }

                var userReservations = await _context.Reservations
                    .Where(r => r.UserId == userId)
                    .ToListAsync();

                return Ok(userReservations ?? new List<Reservation>());
            }
            catch (Exception e)
            {
                return StatusCode(500, "An error occurred while fetching reservations");
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetById(string id)
        {
            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null) return NotFound();
            return Ok(reservation);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteById(string id)
        {
            var reservation = await _context.Reservations.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            _context.Reservations.Remove(reservation);
            await _context.SaveChangesAsync();

            return NoContent(); // 204 No Content is standard for successful DELETE
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateById(string id, [FromBody] Reservation updateData)
        {
            try {
                var reservation = await _context.Reservations.FindAsync(id);
                if (reservation == null) return NotFound();

                var userId = User.FindFirst("_id")?.Value;
                if (reservation.UserId != userId && !User.IsInRole("Admin"))
                {
                    return Forbid();
                }
                reservation.Name = updateData.Name ?? reservation.Name;
                reservation.Date = updateData.Date;
                reservation.People = updateData.People;
                reservation.Message = updateData.Message ?? reservation.Message;
                reservation.Status = updateData.Status ?? reservation.Status;

                await _context.SaveChangesAsync();
                return Ok(reservation);
            }
            catch (Exception ex)
            {
                // Log error (add ILogger to your controller if needed)
                return StatusCode(500, "An error occurred while updating");
            }

        }
    }


    
}
