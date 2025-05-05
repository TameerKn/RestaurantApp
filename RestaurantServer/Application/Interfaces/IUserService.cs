using RestaurantServer.Core.Models;

namespace RestaurantServer.Application.Interfaces
{
    public interface IUserService
    {
        Task<User?> Register(User user);
        Task<string?> Login(LoginModel loginModel);
    }
}
