package mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import mvc.manager.AquariumManager;
import mvc.model.aquarium.AquariumImpl;

@RequestMapping(value = "/aquariums")
@Controller
public class AquariumAsyncController {

	@Autowired
	private AquariumManager aquariumManager;

	// ------ Retrieve All Aquariums ---- //
	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<AquariumImpl>> listAllAquariums() {
		System.out.println("HELLO FROM REST CONTROLLER");
		List<AquariumImpl> aquariums = aquariumManager.findAllAquariums();
		if (aquariums.isEmpty()) {
			return new ResponseEntity<List<AquariumImpl>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<AquariumImpl>>(aquariums, HttpStatus.OK);
	}

	// -------------------Retrieve Single Aquarium---------------------------- //

	@GetMapping(value = "/aquarium/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AquariumImpl> getAquarium(@PathVariable("id") Integer id) {
		System.out.println("Fetching Aquarium with id " + id);
		AquariumImpl aquarium = aquariumManager.findById(id);
		if (aquarium == null) {
			System.out.println("Aquarium with id " + id + " not found");
			return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<AquariumImpl>(aquarium, HttpStatus.OK);
	}

	// -------------------Create an aquarium ------ //

	@PostMapping(value = "/create")
	public ResponseEntity<Void> createAquarium(@RequestBody AquariumImpl aquarium) {
		System.out.println("Creating Aquarium " + aquarium.getName());

		if (aquariumManager.isAquariumExist(aquarium)) {
			System.out.println("A Aquarium with name " + aquarium.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		aquariumManager.addAquarium(aquarium);

		return new ResponseEntity<Void>(HttpStatus.CREATED);

	}

	// ------------------- Update a aquarium ----------------------------- //

	@PutMapping(value = "/update/{id}")
	public ResponseEntity<AquariumImpl> updateAquarium(@PathVariable("id") Integer id, @RequestBody AquariumImpl aquarium) {
		System.out.println("Updating Aquarium " + id);

		AquariumImpl currentAquarium = aquariumManager.findById(id);

		if (currentAquarium == null) {
			System.out.println("Aquarium with id " + id + " not found");
			return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
		}

		currentAquarium.setName(aquarium.getName());
		currentAquarium.setType(aquarium.getType());
		currentAquarium.setGallon(aquarium.getGallon());
		currentAquarium.setNotes(aquarium.getNotes());
		currentAquarium.setDate(aquarium.getDate());

		aquariumManager.updateAquarium(currentAquarium);
		return new ResponseEntity<AquariumImpl>(currentAquarium, HttpStatus.OK);
	}

	// ------------------- Delete a aquarium ----------- //

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<AquariumImpl> deleteAquarium(@PathVariable("id") int id) {
		System.out.println("Fetching & Deleting aquarium with id " + id);

		AquariumImpl aquarium = aquariumManager.findById(id);
		if (aquarium == null) {
			System.out.println("Unable to delete. Aquarium with id " + id + " not found");
			return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
		}

		aquariumManager.deleteAquariumById(id);
		return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
	}

}
