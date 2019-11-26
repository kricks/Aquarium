package mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import mvc.manager.AquariumManager;
import mvc.model.Aquarium;

@RestController
public class AquariumRESTController {
	
	@Autowired
	AquariumManager aquariumManager;

	// ------ Retrieve All Aquariums ---- //
	@RequestMapping(value = "/aquariums", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Aquarium>> listAllAquariums() {
		System.out.print("HELLO FROM JAVA CONTROLLER");
		List<Aquarium> aquariums = aquariumManager.findAllAquariums();
		if(aquariums.isEmpty()){
            return new ResponseEntity<List<Aquarium>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Aquarium>>(aquariums, HttpStatus.OK);
	}
	

	// -------------------Create an aquarium

	@RequestMapping(value = "/aquariums/aquarium", method = RequestMethod.POST)
	public ResponseEntity<Void> createAquarium(@RequestBody Aquarium aquarium, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Aquarium " + aquarium.getName());

		if (aquariumManager.isAquariumExist(aquarium)) {
			System.out.println("A Aquarium with name " + aquarium.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}

		aquariumManager.saveAquarium(aquarium);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/aquarium/{id}").buildAndExpand(aquarium.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
}
