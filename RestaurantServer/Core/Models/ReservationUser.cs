using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RestaurantServer.Core.Models
{
    public class ReservationUser
    {
        [Key]
        [Column(Order = 0)] 
        public string UserId { get; set; }

        [Key]
        [Column(Order = 1)]
        public string ReservationId { get; set; }

        [JsonIgnore]
        public User User { get; set; }

        [JsonIgnore]
        public Reservation Reservation { get; set; }
    }
}
