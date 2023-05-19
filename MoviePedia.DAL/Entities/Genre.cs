using System.Text.Json.Serialization;

namespace MoviePedia.DAL.Entities;

public class Genre
{
    public int Id { get; set; }

    public string Name { get; set; }

    [JsonIgnore]
    public virtual ICollection<Movie> Movies { get; set; }
}