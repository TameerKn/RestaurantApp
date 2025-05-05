using RestaurantServer.Core.Models;
namespace RestaurantServer.Application.Interfaces
{
    public interface IAuth
    {
        public string GenerateToken(User u);
    }
}
