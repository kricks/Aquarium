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

	@PostMapping(value = "/aquarium-details")
	public String addNewAquarium(@ModelAttribute("aquarium") Aquarium aquarium, ModelMap model) {
		model.addAttribute("name", aquarium.getName());
		model.addAttribute("type", aquarium.getType());
		model.addAttribute("gallon", aquarium.getGallon());
		model.addAttribute("notes", aquarium.getNotes());

		return "aquariumDetails";
	}

}
