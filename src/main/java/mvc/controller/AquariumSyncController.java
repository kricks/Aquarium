package mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.model.Aquarium;

@Controller
public class AquariumSyncController {

	@GetMapping(value = "/aquarium-list")
	public ModelAndView display() {
		return new ModelAndView("aquariumList", "aquarium", new Aquarium());
	}
	
	@PostMapping (value = "/aquarium-details")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") Aquarium aquarium) {
		return new ModelAndView("aquariumDetails", "aquarium", aquarium);
	}

}
