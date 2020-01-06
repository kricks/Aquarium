package mvc.controller.aquarium;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumImpl;
import mvc.manager.aquarium.AquariumManager;

@Controller
public class AquariumSyncController {

	@Autowired
	private AquariumManager aquariumManager;

	private static String aquariumList = "aquariumList";
	private static String aquariumConfirmation = "aquariumConfirmation";

	@GetMapping(value = "/aquarium-list")
	public ModelAndView displayAquariumPage() {
		return new ModelAndView(aquariumList, "aquarium", new AquariumImpl());
	}

	@GetMapping(value = "/aquarium-confirmation")
	public ModelAndView displayConfirmation() {
		return new ModelAndView(aquariumConfirmation, "aquarium", new AquariumImpl());
	}

	@PostMapping(value = "/aquarium-confirmation")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumImpl aquarium) {
		aquariumManager.addAquarium(aquarium);
		return new ModelAndView(aquariumConfirmation, "aquarium", aquarium);
	}
}
