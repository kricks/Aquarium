package mvc.controller.aquarium;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import mvc.manager.aquarium.AquariumManager;

@Controller
public class AquariumSyncController {

	@Autowired
	AquariumManager aquariumManager;

}
