using Microsoft.EntityFrameworkCore;
using MoviePedia.DAL.Entities;

namespace MoviePedia.DAL;

public sealed class MovieRepository
{
    private readonly MovieContext _context;

    public MovieRepository(MovieContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Movie>> GetMoviesAsync()
    {
        return await _context.Movies.AsNoTracking().ToArrayAsync();
    }

    public async Task<Movie> AddMovieAsync(CreateMovie newMovie)
    {
        var newEntity = new Movie
        {
            Name = newMovie.Name,
            Rating = newMovie.Rating,
            PictureUrl = newMovie.PictureUrl,
            GenreId = newMovie.GenreId,
        };
        _context.Movies.Add(newEntity);
        await _context.SaveChangesAsync();

        return newEntity;
    }
    
    public async Task<Movie> GetMovieAsync(int movieId)
    {
        return await _context.Movies.Include(x => x.Genre).AsNoTracking().FirstOrDefaultAsync(x => x.Id == movieId);
    }

    public async Task DeleteMovieAsync(int movieId)
    {
        var movie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == movieId);
        if (movie is not null)
        {
            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
        }
    }
}