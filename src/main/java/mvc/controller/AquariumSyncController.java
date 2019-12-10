package mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumImpl;

@Controller
public class AquariumSyncController {

	@GetMapping(value = "/aquarium-list")
	public ModelAndView display() {
		return new ModelAndView("aquariumList", "aquarium", new AquariumImpl());
	}

	@GetMapping(value = "/aquarium-details")
	public ModelAndView displayAD() {
		return new ModelAndView("aquariumDetails", "aquarium", new AquariumImpl());
	}

	@PostMapping(value = "/aquarium-details")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumImpl aquarium) {
		return new ModelAndView("aquariumDetails", "message", aquarium);
	}

}
