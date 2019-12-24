package mvc.controller.livestock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import mvc.manager.livestock.LivestockManager;

@Controller
public class LivestockSyncController {

	@Autowired
	LivestockManager livestockManager;

	private static final String livestockList = "aquariumDetails";
	private static final String livestockConfirmation = "livestockConfirmation";

//	@GetMapping(value = "/livestock-list")
//	public ModelAndView displayAD() {
//		return new ModelAndView(livestockList, "aquarium", new AquariumImpl());
//	}

	/*
	 * @GetMapping(value = "/livestock-list/{aquariumId}") public ModelAndView
	 * displayLivestockByAquariumId(@PathVariable Integer aquariumId) { ModelAndView
	 * mv = new ModelAndView(livestockList, "aquarium", new AquariumImpl());
	 * mv.addObject("aquariumId", aquariumId); return mv; }
	 * 
	 * @PostMapping(value = "/livestock-confirmation") public ModelAndView
	 * addNewLivestock(@ModelAttribute("livestock") LivestockImpl livestock) {
	 * livestockManager.addLivestock(livestock); return new
	 * ModelAndView(livestockConfirmation, "message", livestock); }
	 */

}
