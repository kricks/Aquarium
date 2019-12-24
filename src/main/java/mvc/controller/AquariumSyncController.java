package mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumImpl;
import mvc.entity.livestock.LivestockImpl;
import mvc.manager.livestock.LivestockManager;

@Controller
public class AquariumSyncController {

	@Autowired
	LivestockManager livestockManager;

	private static final String aquariumList = "aquariumList";
	private static final String aquariumDetails = "aquariumDetails";
	private static final String livestockConfirmation = "livestockConfirmation";

	@GetMapping(value = "/aquarium-list")
	public ModelAndView display() {
		return new ModelAndView(aquariumList, "aquarium", new AquariumImpl());
	}

	@GetMapping(value = "/aquarium-details")
	public ModelAndView displayAD() {
		return new ModelAndView(aquariumDetails, "aquarium", new AquariumImpl());
	}

	@GetMapping(value = "/aquarium-details/{aquariumId}")
	public ModelAndView displayLivestockByAquariumId(@PathVariable Integer aquariumId) {
		ModelAndView mv = new ModelAndView(aquariumDetails, "aquarium", new AquariumImpl());
		mv.addObject("aquariumId", aquariumId);
		return mv;
	}

	@PostMapping(value = "/aquarium-details/{aquariumId}")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumImpl aquarium) {
		return new ModelAndView(aquariumDetails, "message", aquarium);
	}

	@PostMapping(value = "/livestock-confirmation")
	public ModelAndView addNewLivestock(@ModelAttribute("livestock") LivestockImpl livestock) {
		livestockManager.addLivestock(livestock);
		return new ModelAndView(livestockConfirmation, "message", livestock);
	}

}
