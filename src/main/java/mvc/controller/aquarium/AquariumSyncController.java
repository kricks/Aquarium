package mvc.controller.aquarium;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import mvc.manager.aquarium.AquariumManager;

@Controller
public class AquariumSyncController {

	@Autowired
	AquariumManager aquariumManager;

	private static final String aquariumList = "aquariumList";
	private static final String aquariumConfirmation = "aquariumConfirmation";

//	@GetMapping(value = "/aquarium-list")
//	public ModelAndView display() {
//		return new ModelAndView(aquariumList, "aquarium", new AquariumImpl());
//	}

//	@PostMapping(value = "/aquarium-confirmation")
//	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumImpl aquarium) {
//		aquariumManager.addAquarium(aquarium);
//		return new ModelAndView(aquariumConfirmation, "message", aquarium);
//	}
}
