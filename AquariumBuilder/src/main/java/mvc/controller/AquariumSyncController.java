package mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import mvc.model.Aquarium;

@Controller
public class AquariumSyncController<AquariumService> {

	@RequestMapping(value = "/aquarium-list", method = RequestMethod.GET)
	public ModelAndView display() {
		return new ModelAndView("aquariumList", "aquarium", new Aquarium());
	}

	@RequestMapping(value = "/aquarium-details", method = RequestMethod.POST)
	public String addNewAquarium(@ModelAttribute("aquarium") Aquarium aquarium, ModelMap model) {
		model.addAttribute("name", aquarium.getName());
		model.addAttribute("type", aquarium.getType());
		model.addAttribute("gallon", aquarium.getGallon());
		model.addAttribute("notes", aquarium.getNotes());

		return "aquariumDetails";
	}

}
