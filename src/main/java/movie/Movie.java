package movie;

/**
 * Created by jshedrof on 3/22/2017.
 */
public class Movie {
    private long id, genre_id, year;
    private String name;

    public Movie(long id, long genre_id, long year, String name) {
        this.id = id;
        this.name = name;
        this.genre_id = genre_id;
        this.year = year;
    }

    @Override
    public String toString() {
        return String.format(
                "Movie[id=%d, genre_id=%d, year=%d, name='%s']",
                id, genre_id, year, name
        );
    }
}
