package movie;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

import java.lang.reflect.Array;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by jshedrof on 3/24/2017.
 */
@SpringBootApplication
public class Application{
    
    private static final Logger log = LoggerFactory.getLogger(Application.class);
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @Autowired
    JdbcTemplate jdbcTemplate;
    
    @Bean
    public CommandLineRunner generateGenres(GenreRepository repository) {
        return (args) -> {
            repository.save(new Genre("Drama"));
            repository.save(new Genre("Action"));
            repository.save(new Genre("Comedy"));
            log.info("Genres Created");
        };
        
    }
    
    @Bean
    public CommandLineRunner generateMovies(MovieRepository repository) {
        return (args) -> {
            repository.save(new Movie(1, "Deadpool", 2016, "Comedy"));
            repository.save(new Movie(2, "Arrival", 2016, "Drama"));
            repository.save(new Movie(3, "Rogue One: A Star Wars Story", 2016, "Action"));
            log.info("Movies Generated");
        };
    }
    

}
