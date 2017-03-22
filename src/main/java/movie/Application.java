package movie;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * Created by jshedrof on 3/22/2017.
 */
@SpringBootApplication
public class Application implements CommandLineRunner{
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String args[]) { SpringApplication.run(Application.class, args); }

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void run(String... strings) throws Exception {
        log.info("Creating Tables");

        jdbcTemplate.execute("DROP TABLE movies IF EXISTS");
        jdbcTemplate.execute("CREATE TABLE movies" +
                "id SERIAL, movie_name VARCHAR(255), movie_year INT, genre_id INT");

    }
}
