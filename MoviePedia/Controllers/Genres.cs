using Microsoft.AspNetCore.Mvc;
using MoviePedia.DAL;
using MoviePedia.DAL.Entities;

namespace MoviePedia.Controllers;

[ApiController]
[Route("[controller]")]
public class GenresController : ControllerBase
{
    private readonly GenresRepository _genresRepository;

    public GenresController(GenresRepository genresRepository)
    {
        _genresRepository = genresRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<Genre>> GetGenresAsync()
    {
        return await _genresRepository.GetGenresAsync();
    }
}