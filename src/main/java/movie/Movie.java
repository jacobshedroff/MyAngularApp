package movie;

import java.time.Year;

/**
 * Created by jshedrof on 3/24/2017.
 */
public class Movie {
    private long id;
    private String title;
    private int year;
    private int genre_id;
    
    public Movie(long id, String title, int year, int genre_id) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre_id = genre_id;
    }
    
    @Override
    public String toString() {
        return String.format(
                "Movie[id=%d, title='%s', year='%y', genre_id='%g'",
                id, title, year, genre_id
        );
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public int getYear() {
        return year;
    }
    
    public void setYear(int year) {
        this.year = year;
    }
    
    public int getGenreId() {
        return genre_id;
    }
    
    public void setGenreId(int genre_id) {
        this.genre_id = genre_id;
    }
}
