package movie;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.lang.reflect.Array;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by jshedrof on 3/24/2017.
 */
@SpringBootApplication
public class Application implements CommandLineRunner{
    
    private static final Logger log = LoggerFactory.getLogger(Application.class);
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @Autowired
    JdbcTemplate jdbcTemplate;
    
    @Override
    public void run(String... strings)throws Exception {
        log.info("Creating tables");
        jdbcTemplate.execute("DROP TABLE movies IF EXISTS");
        jdbcTemplate.execute("CREATE TABLE movies(" +
                "id SERIAL, title VARCHAR(255), movie_year YEAR, genre_id INT)");
    
        List<Object[]> movieList = Arrays.asList("Arrival", "Rogue One: A Star Wars Story", "Deadpool").stream()
                .map(name -> name.split(","))
                .collect(Collectors.toList());
        
        movieList.forEach(movie -> log.info(String.format("Inserting movie record for %s", movie)));
    
        List<Object[]> yearList = Arrays.asList("2016", "2016", "2016").stream()
                .map(name -> name.split(","))
                .collect(Collectors.toList());
        
        yearList.forEach(movie -> log.info(String.format("Inserting movie record for %s", movie)));
    
    
        List<Object[]> genreIdList = Arrays.asList("0", "1", "2").stream()
                .map(name -> name.split(","))
                .collect(Collectors.toList());
    
        genreIdList.forEach(movie -> log.info(String.format("Inserting movie record for %s", movie)));

        
        jdbcTemplate.batchUpdate("INSERT INTO movies(title) VALUES (?)", movieList);
        jdbcTemplate.batchUpdate("INSERT INTO movies(movie_year) VALUES (?)", yearList);
        jdbcTemplate.batchUpdate("INSERT INTO movies(genre_id) VALUES (?)", genreIdList);
    
        log.info("Querying for movie records where title = 'Arrival':");
        jdbcTemplate.query(
                "SELECT id, title, movie_year, genre_id FROM movies WHERE title = ?", new Object[] { "Arrival" },
                (rs, rowNum) -> new Movie(rs.getLong("id"), rs.getString("title"), rs.getInt("movie_year"), rs.getInt("genre_id"))
        ).forEach(movie -> log.info(movie.toString()));
    }
}
