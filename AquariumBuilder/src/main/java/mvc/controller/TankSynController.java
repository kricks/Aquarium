package mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import mvc.model.Tank;

@Controller
public class TankSynController<TankService> {

	// "/addNewTank" does not reference the jsp page. "addNewTank" does reference
	// the jsp

	@RequestMapping(value = "/tank-list", method = RequestMethod.GET)
	public ModelAndView display() {
		return new ModelAndView("tank_list", "tank", new Tank());
	}

	@RequestMapping(value = "/tank-details", method = RequestMethod.POST)
	public String addNewTank(@ModelAttribute("tank") Tank tank, BindingResult result, ModelMap model) {
		model.addAttribute("name", tank.getName());
		model.addAttribute("type", tank.getType());
		model.addAttribute("gallon", tank.getGallon());
		model.addAttribute("notes", tank.getNotes());

		return "tank_details";
	}

}
