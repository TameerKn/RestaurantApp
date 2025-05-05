
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;
using RestaurantServer.Application.Filters;
using RestaurantServer.Application.Interfaces;
using RestaurantServer.Application.Services;
using RestaurantServer.Core.Interfaces;
using RestaurantServer.Core.Models;
using RestaurantServer.Infrastructure.Data;
using RestaurantServer.Infrastructure.Services;
using System.Text;

namespace RestaurantServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers(options =>
            {
                options.Filters.Add<ValidateModelFilter>();
                options.Filters.Add<LogActionFilter>();
            });

            string connectionString = "Server=LAPTOP-BKEMJSI7; Database=RestaurantDbTest; Trusted_Connection=True; TrustServerCertificate=True;";

            builder.Services.AddDbContext<RestaurantDbContext>(options => options.UseSqlServer(connectionString));

            builder.Services.AddSingleton<IAuth, JwtAuthService>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {

                options.TokenValidationParameters = new TokenValidationParameters
                {

                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,


                    ValidIssuer = "RestaurantServer",
                    ValidAudience = "restaurantclient",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("8a4e98ac-6ad4-495a-aad5-73d4f3d31507"))

                };

            });
            builder.Services.AddCors(
            options => options.AddPolicy("myCorsPolicy",
            policy => policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
            );

            builder.Services.AddAuthorization(options =>
            {
                options.AddPolicy("MustBeAdmin", policy => policy.RequireClaim("isAdmin", "True"));
            });

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("myCorsPolicy");
            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
