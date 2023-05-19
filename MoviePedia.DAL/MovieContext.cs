using Microsoft.EntityFrameworkCore;
using MoviePedia.DAL.Entities;

namespace MoviePedia.DAL;

public sealed class MovieContext : DbContext
{
    public DbSet<Movie> Movies { get; set; }

    public DbSet<Genre> Genres { get; set; }

    public MovieContext(DbContextOptions<MovieContext> options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<Movie>(x =>
        {
            x.HasKey(e => e.Id);
            x.Property(e => e.PictureUrl).IsRequired().HasMaxLength(256);
            x.Property(e => e.Name).IsRequired().HasMaxLength(100);
            x.HasOne(e => e.Genre)
                .WithMany(e => e.Movies)
                .HasForeignKey(e => e.GenreId);
        });

        modelBuilder.Entity<Genre>(x =>
        {
            x.HasKey(e => e.Id);
            x.Property(e => e.Name).IsRequired().HasMaxLength(100);

            x.HasData(new Genre
            {
                Id = 1,
                Name = "Comedy"
            }, new Genre
            {
                Id = 2,
                Name = "Detective"
            }, new Genre
            {
                Id = 3,
                Name = "Drama"
            });
        });
    }
}