package movie;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jshedrof on 3/24/2017.
 */
@RestController
public class MovieController {
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
