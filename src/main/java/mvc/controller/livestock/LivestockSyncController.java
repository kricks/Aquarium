package mvc.controller.livestock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumView;
import mvc.manager.aquarium.AquariumManager;
import mvc.manager.livestock.LivestockManager;

@Controller
public class LivestockSyncController {

	@Autowired
	private AquariumManager aquariumManager;

	@Autowired
	private LivestockManager livestockManager;

	private static String livestockList = "livestockList";

	@GetMapping(value = "/livestock-list/{fkAquariumId}")
	public ModelAndView displayLivestockByFkAquariumId(@PathVariable Integer fkAquariumId) {
		AquariumView aq = aquariumManager.findById(fkAquariumId);
		ModelAndView mv = new ModelAndView(livestockList, "aquarium", aq);
		mv.addObject("fkAquariumId", fkAquariumId);
		return mv;
	}

}
