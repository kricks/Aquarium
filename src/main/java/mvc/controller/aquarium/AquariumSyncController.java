package mvc.controller.aquarium;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumView;
import mvc.manager.aquarium.AquariumManager;

@Controller
public class AquariumSyncController {

	@Autowired
	AquariumManager aquariumManager;

	private static final String aquariumList = "aquariumList";
	private static final String aquariumConfirmation = "aquariumConfirmation";

	@GetMapping(value = "/aquarium-list")
	public ModelAndView displayAquariumPage() {
		return new ModelAndView(aquariumList, "aquarium", new AquariumView());
	}

	@GetMapping(value = "/aquarium-confirmation")
	public ModelAndView displayConfirmation() {
		return new ModelAndView(aquariumConfirmation, "aquarium", new AquariumView());
	}

	@PostMapping(value = "/aquarium-confirmation")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumView aquarium) {
		aquariumManager.addAquarium(aquarium);
		return new ModelAndView(aquariumConfirmation, "message", aquarium);
	}

}
