package mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import mvc.entity.aquarium.AquariumView;
import mvc.manager.aquarium.AquariumManager;

@Controller
public class NavigationController {

	@Autowired
	private AquariumManager aquariumManager;

	private static String livestockList = "livestockList";
	private static String aquariumList = "aquariumList";
	private static String aquariumConfirmation = "aquariumConfirmation";

	@GetMapping(value = { "/", "/home", "/index" })
	public String getIndex() {
		return "index";
	}

	@GetMapping(value = "/livestock-list/{fkAquariumId}")
	public ModelAndView displayLivestockByFkAquariumId(@PathVariable Integer fkAquariumId) {
		AquariumView aqV = aquariumManager.findById(fkAquariumId);
		ModelAndView mv = new ModelAndView(livestockList, "aquarium", aqV);
		mv.addObject("fkAquariumId", fkAquariumId);
		return mv;
	}

	@GetMapping(value = "/aquarium-list")
	public ModelAndView displayAquariumPage() {
		return new ModelAndView(aquariumList, "aquarium", new AquariumView());
	}

	@GetMapping(value = "/aquarium-confirmation")
	public ModelAndView displayAquariumConfirmation() {
		return new ModelAndView(aquariumConfirmation, "aquarium", new AquariumView());
	}

	@PostMapping(value = "/aquarium-confirmation")
	public ModelAndView addNewAquarium(@ModelAttribute("aquarium") AquariumView aquarium) {
		aquariumManager.addAquarium(aquarium);
		return new ModelAndView(aquariumConfirmation, "message", aquarium);
	}
}
