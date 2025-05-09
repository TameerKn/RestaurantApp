﻿using RestaurantServer.Core.Models;
namespace RestaurantServer.Core.Interfaces
{
    public interface IUserRepository
    {
        public Task<User?> CreateUserAsync(User user);
        public Task<User?> GetUserByEmailAsync(string email);
        //public Task<User?> GetUserByIdAsync(string id);
        //public Task<List<User>> GetAllUsersAsync();
        //public Task<User?> UpdateUserAsync(string id, User user);
        //public Task<User?> DeleteUserAsync(string id);

    }
}
