using System.Text.Json.Serialization;
using RestaurantServer.Core.Models.SubModels;
using System.Xml.Serialization;
using System.ComponentModel.DataAnnotations;


namespace RestaurantServer.Core.Models
{
    public class User
    {
        [JsonPropertyName("_id")]
        [JsonIgnore]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        [RegularExpression("0[0-9]{1,2}-?\\s?[0-9]{3}\\s?[0-9]{4}", ErrorMessage = "user \"phone\" must be a valid phone number")]
        public string Phone { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
        public Name Name { get; set; }
        public bool IsAdmin { get; set; }
        [JsonIgnore]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [JsonIgnore]
        public ICollection<ReservationUser> ReservationUsers { get; set; } = new List<ReservationUser>();
    }
}
