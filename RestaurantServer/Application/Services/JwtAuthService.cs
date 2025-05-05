using Microsoft.IdentityModel.Tokens;
using RestaurantServer.Application.Interfaces;
using RestaurantServer.Core.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
namespace RestaurantServer.Application.Services
{
    public class JwtAuthService : IAuth
    {
        public string GenerateToken(User u)
        {
            Claim[] claims = new Claim[]
            {
                new Claim("_id", u.Id),
                new Claim("isAdmin", u.IsAdmin.ToString())
            };


            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("8a4e98ac-6ad4-495a-aad5-73d4f3d31507"));
            SigningCredentials credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: "RestaurantServer",
                audience: "restaurantclient",
                expires: DateTime.Now.AddDays(10),
                claims: claims,
                signingCredentials: credentials
                );


            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
