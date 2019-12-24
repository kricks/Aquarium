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
public class LivestockSyncController {

	@Autowired
	LivestockManager livestockManager;

	private static final String livestockList = "livestockList";
	private static final String livestockConfirmation = "livestockConfirmation";

//	@GetMapping(value = "/livestock-list")
//	public ModelAndView displayAD() {
//		return new ModelAndView(livestockList, "aquarium", new AquariumImpl());
//	}

	@GetMapping(value = "/livestock-list/{aquariumId}")
	public ModelAndView displayLivestockByAquariumId(@PathVariable Integer aquariumId) {
		ModelAndView mv = new ModelAndView(livestockList, "aquarium", new AquariumImpl());
		mv.addObject("aquariumId", aquariumId);
		return mv;
	}

	@PostMapping(value = "/livestock-confirmation")
	public ModelAndView addNewLivestock(@ModelAttribute("livestock") LivestockImpl livestock) {
		livestockManager.addLivestock(livestock);
		return new ModelAndView(livestockConfirmation, "message", livestock);
	}

}
