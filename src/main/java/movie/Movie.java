package movie;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.Year;

/**
 * Created by jshedrof on 3/24/2017.
 */
@Entity
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String title;
    private int year;
    private int genre_id;
    
    protected Movie() {}
    
    public Movie(String title, int year, int genre_id) {
        this.title = title;
        this.year = year;
        this.genre_id = genre_id;
    }
    
    @Override
    public String toString() {
        return String.format(
                "Movie[id=%d, title='%s', year='%d', genre_id='%d'",
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
