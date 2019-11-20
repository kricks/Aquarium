package mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import mvc.model.Tank;
import mvc.services.TankService;

@RestController
public class TankAsyncController {
	@Autowired
	TankService tankService;

	// ------ Retrieve All Aquariums ---- //
	@RequestMapping(value = "/tanks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Tank>> listAllTanks() {
		System.out.print("HELLO FROM JAVA CONTROLLER");
		List<Tank> tanks = tankService.findAllTanks();
		if(tanks.isEmpty()){
            return new ResponseEntity<List<Tank>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Tank>>(tanks, HttpStatus.OK);
	}
	

	// -------------------Create an aquarium

	@RequestMapping(value = "/tanks/tank", method = RequestMethod.POST)
	public ResponseEntity<Void> createTank(@RequestBody Tank tank, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Tank " + tank.getName());

		if (tankService.isTankExist(tank)) {
			System.out.println("A Tank with name " + tank.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}

		tankService.saveTank(tank);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/tank/{id}").buildAndExpand(tank.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
}
