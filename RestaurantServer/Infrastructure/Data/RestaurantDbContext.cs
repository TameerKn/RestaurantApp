using Microsoft.EntityFrameworkCore;
using RestaurantServer.Core.Models;

namespace RestaurantServer.Infrastructure.Data
{
    public class RestaurantDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<ReservationUser> ReservationUsers { get; set; }

        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Explicitly configure the composite primary key
            modelBuilder.Entity<ReservationUser>()
                .HasKey(ru => new { ru.UserId, ru.ReservationId });

            // Configure the relationship to User
            modelBuilder.Entity<ReservationUser>()
                .HasOne(ru => ru.User)
                .WithMany(u => u.ReservationUsers)
                .HasForeignKey(ru => ru.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure the relationship to Reservation
            modelBuilder.Entity<ReservationUser>()
                .HasOne(ru => ru.Reservation)
                .WithMany(r => r.ReservationUsers)
                .HasForeignKey(ru => ru.ReservationId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
