package mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumImpl;
import mvc.manager.aquarium.AquariumManager;

@Controller
public class AppController {

	@Autowired
	AquariumManager aquariumManager;

	private static final String aquariumList = "aquariumList";
	private static final String livestockList = "livestockList";
	private static final String aquariumConfirmation = "aquariumConfirmation";

	@GetMapping(value = "/aquarium-list")
	public ModelAndView display() {
		return new ModelAndView(aquariumList, "aquarium", new AquariumImpl());
	}

	@GetMapping(value = "/aquarium-confirmation")
	public ModelAndView displayConf() {
		return new ModelAndView(aquariumConfirmation, "aquarium", new AquariumImpl());
	}

	@GetMapping(value = "/livestock-list")
	public ModelAndView displayAD() {
		return new ModelAndView(livestockList, "aquarium", new AquariumImpl());
	}

	@PostMapping(value = "/aquarium-confirmation")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumImpl aquarium) {
		aquariumManager.addAquarium(aquarium);
		return new ModelAndView(aquariumConfirmation, "message", aquarium);
	}

}
