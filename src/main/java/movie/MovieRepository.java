package movie;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by jshedrof on 3/27/2017.
 */
public interface MovieRepository extends CrudRepository<Movie, Long>{
    List<Movie> findByTitle(String title);
}
