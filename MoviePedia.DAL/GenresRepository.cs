using Microsoft.EntityFrameworkCore;
using MoviePedia.DAL.Entities;

namespace MoviePedia.DAL;

public sealed class GenresRepository
{
    private readonly MovieContext _context;

    public GenresRepository(MovieContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Genre>> GetGenresAsync()
    {
        return await _context.Genres.AsNoTracking().ToArrayAsync();
    }
}