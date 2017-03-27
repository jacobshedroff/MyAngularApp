package movie;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by jshedrof on 3/24/2017.
 */
@RestController
public class MovieController {
    @RequestMapping("/")
    void index(HttpServletResponse response) throws IOException {
        response.sendRedirect("Index.html");
    }
//
//    public String index() {
//        return "index.html";
//    }
}
