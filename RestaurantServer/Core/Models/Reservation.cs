using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Contracts;
using System.Text.Json.Serialization;

using RestaurantServer.Core.Models.SubModels;

namespace RestaurantServer.Core.Models
{
    public class Reservation
    {
        [JsonPropertyName("_id")]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Number { get; set; } 
        public string Name { get; set; }
        public string Phone { get; set; }
        public int People { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string Message { get; set; }
        public string Status { get; set; }
        [JsonIgnore]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [JsonPropertyName("user_id")]
        [JsonIgnore]
        public string? UserId { get; set; }

        [JsonIgnore]
        public ICollection<ReservationUser> ReservationUsers { get; set; } = new List<ReservationUser>();
    }
}
