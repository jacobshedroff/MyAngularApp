package movie;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by jshedrof on 3/27/2017.
 */
@RepositoryRestResource(collectionResourceRel = "genres", path ="genres")
public interface GenreRepository extends PagingAndSortingRepository<Genre, Long>{
    List<Genre> findById(@Param("id") Long id);
}
