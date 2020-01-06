package mvc.controller.livestock;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumImpl;

@Controller
public class LivestockSyncController {

	private static String livestockList = "livestockList";

	@GetMapping(value = "/livestock-list/{fkAquariumId}")
	public ModelAndView displayLivestockByFkAquariumId(@PathVariable Integer fkAquariumId) {
		ModelAndView mv = new ModelAndView(livestockList, "livestock", new AquariumImpl());
		mv.addObject("fkAquariumId", fkAquariumId);
		return mv;
	}
}
