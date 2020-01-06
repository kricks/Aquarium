package mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	@GetMapping(value = { "/", "/home", "/index" })
	public String getIndex() {
		return "index";
	}
}
