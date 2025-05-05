using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace RestaurantServer.Core.Models.SubModels
{
    [Owned]
    public class Image
    {
        [Url]
        public string Url { get; set; }
        public string Alt { get; set; }
    }
}
