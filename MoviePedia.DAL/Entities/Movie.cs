namespace MoviePedia.DAL.Entities;

public class Movie
{
    public int Id { get; set; }

    public string Name { get; set; }

    public int Rating { get; set; }

    public string PictureUrl { get; set; }

    public int GenreId { get; set; }

    public virtual Genre Genre { get; set; }
}