using Microsoft.EntityFrameworkCore;
using RestaurantServer.Core.Interfaces;
using RestaurantServer.Core.Models;
using RestaurantServer.Infrastructure.Data;

namespace RestaurantServer.Infrastructure.Services
{
    public class UserRepository : IUserRepository
    {
        private readonly RestaurantDbContext _context;
        public UserRepository(RestaurantDbContext context)
        {
            _context =  context;
        }

        public async Task<User?> CreateUserAsync(User user)
        {
            try
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return user;
            }
            catch (Exception e) 
            {
                Console.WriteLine(e);
                return null;
            }
        }
        public async Task<User?> GetUserByEmailAsync(string email)
        {
            try
            {
                return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            }
            catch (Exception ex) 
            {
                Console.WriteLine(ex);
                return null;
            }
        }
    }
}
