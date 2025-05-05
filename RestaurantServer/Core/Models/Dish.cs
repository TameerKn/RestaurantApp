using RestaurantServer.Core.Models.SubModels;
using System.Text.Json.Serialization;

namespace RestaurantServer.Core.Models
{
    public class Dish
    {
        [JsonPropertyName("_id")]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Tag { get; set; }
        public Image Image { get; set; }
        public decimal Price { get; set; }

    }
}
