using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantServer.Core.Models;
using RestaurantServer.Infrastructure.Data;
using System.Security.Claims;

namespace RestaurantServer.Presentation.Controllers
{
    [Route("[controller]es")]
    [ApiController]
    public class DishController : ControllerBase
    {

        private RestaurantDbContext _context;
        public DishController(RestaurantDbContext restaurantDbContext)
        {
            _context = restaurantDbContext;
        }
        [Authorize(Policy = "MustBeAdmin")]
        [HttpPost]
        public async Task<IActionResult> Post(Dish dish)
        {

            _context.Dishes.Add(dish);
            await _context.SaveChangesAsync();
            return Ok(dish);
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Dish> result = await _context.Dishes.ToListAsync();
                if (result == null)
                {
                    return Ok(new List<Dish>());
                }
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [Authorize]
        [HttpGet("{id}")] // This should match your frontend call
        public async Task<IActionResult> GetById(string id)
        {
            var dish = await _context.Dishes.FindAsync(id);
            if (dish == null) return NotFound();
            return Ok(dish);
        }

        [Authorize(Policy = "MustBeAdmin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(string id)
        {
            var dish = await _context.Dishes.FindAsync(id);

            if (dish == null)
            {
                return NotFound();
            }

            _context.Dishes.Remove(dish);
            await _context.SaveChangesAsync();

            return NoContent(); // 204 No Content is standard for successful DELETE
        }

        [Authorize(Policy = "MustBeAdmin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDish(string id, [FromBody] Dish updateData)
        {
            try
            {



                var dish = await _context.Dishes.FindAsync(id);
                if (dish == null)
                {
                    return NotFound();
                }

                // Update allowed fields
                dish.Name = updateData.Name ?? dish.Name;
                dish.Category = updateData.Category ?? dish.Category;
                dish.Description = updateData.Description ?? dish.Description;
                dish.Tag = updateData.Tag ?? dish.Tag;
                dish.Price = updateData.Price;

                // Handle image update if needed
                if (updateData.Image != null)
                {
                    dish.Image = updateData.Image;
                }

                await _context.SaveChangesAsync();
                return Ok(dish);
            }
            catch (Exception ex)
            {
                // Log error (consider injecting ILogger in constructor)
                return StatusCode(500, "An error occurred while updating the dish");
            }
        }
    }
}
