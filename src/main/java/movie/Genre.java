package movie;

/**
 * Created by jshedrof on 3/22/2017.
 */
public class Genre {
    private long id;
    private String name;

    public Genre(long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format(
                "Movie[id=%d, name='%s'",
                id, name
        );
    }
}
