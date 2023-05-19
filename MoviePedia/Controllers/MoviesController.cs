using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using MoviePedia.DAL;
using MoviePedia.DAL.Entities;

namespace MoviePedia.Controllers;

[ApiController]
[Route("[controller]")]
public class MoviesController : ControllerBase
{
    private readonly MovieRepository _movieRepository;
    
    public MoviesController(MovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<Movie>> GetMoviesAsync()
    {
        return await _movieRepository.GetMoviesAsync();
    }

    [HttpPost]
    public async Task<Movie> AddMovieAsync([FromBody, Required] CreateMovie movieData)
    {
        return await _movieRepository.AddMovieAsync(movieData);
    }

    [HttpDelete("{movieId:int}")]
    public async Task DeleteMovieAsync([FromRoute, Required] int movieId)
    {
        await _movieRepository.DeleteMovieAsync(movieId);
    }

    [HttpGet("{movieId:int}")]
    public async Task<MovieDetail> GetMovieAsync([FromRoute, Required] int movieId)
    {
        var w = await _movieRepository.GetMovieAsync(movieId);
        return new MovieDetail
        {
            PictureUrl = w.PictureUrl,
            Name = w.Name,
            Id = w.Id,
            Rating = w.Rating,
            Genre = w.Genre.Name
        };
    }
}