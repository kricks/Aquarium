package mvc.controller.aquarium;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

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

import mvc.dao.aquarium.AquariumDaoImpl;
import mvc.entity.aquarium.AquariumImpl;
import mvc.manager.aquarium.AquariumManager;

@RequestMapping(value = "/aquariums")
@Controller
public class AquariumAsyncController {

	private final static Logger logger = Logger.getLogger(AquariumDaoImpl.class.getName());

	@Autowired
	private AquariumManager aquariumManager;

	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<AquariumImpl>> listAllAquariums() {
		List<AquariumImpl> aquariums = aquariumManager.findAllAquariums();
		if (aquariums.isEmpty()) {
			return new ResponseEntity<List<AquariumImpl>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<AquariumImpl>>(aquariums, HttpStatus.OK);
	}

	@GetMapping(value = "/{aquariumId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AquariumImpl> getAquarium(@PathVariable("aquariumId") Integer aquariumId) {
		logger.log(Level.INFO, "Fetching Aquarium with aquariumId " + aquariumId);
		AquariumImpl aquarium = aquariumManager.findById(aquariumId);
		if (aquarium == null) {
			logger.log(Level.INFO, "Aquarium with aquariumId " + aquariumId + " not found");
			return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<AquariumImpl>(aquarium, HttpStatus.OK);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<Void> createAquarium(@RequestBody AquariumImpl aquarium) {
		logger.log(Level.INFO, "Creating Aquarium " + aquarium.getName());

		if (aquariumManager.isAquariumExist(aquarium)) {
			logger.log(Level.INFO, "A Aquarium with name " + aquarium.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		aquariumManager.addAquarium(aquarium);

		return new ResponseEntity<Void>(HttpStatus.CREATED);

	}

	@PutMapping(value = "/update/{aquariumId}")
	public ResponseEntity<AquariumImpl> updateAquarium(@PathVariable("aquariumId") Integer aquariumId,
			@RequestBody AquariumImpl aquarium) {
		logger.log(Level.INFO, "Updating Aquarium " + aquariumId);

		AquariumImpl currentAquarium = aquariumManager.findById(aquariumId);

		if (currentAquarium == null) {
			logger.log(Level.INFO, "Aquarium with aquariumId " + aquariumId + " not found");
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

	@DeleteMapping(value = "/delete/{aquariumId}")
	public ResponseEntity<AquariumImpl> deleteAquarium(@PathVariable("aquariumId") int aquariumId) {
		logger.log(Level.INFO, "Fetching & Deleting aquarium with aquariumId " + aquariumId);

		AquariumImpl aquarium = aquariumManager.findById(aquariumId);
		if (aquarium == null) {
			logger.log(Level.INFO, "Unable to delete. Aquarium with aquariumId " + aquariumId + " not found");
			return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
		}

		aquariumManager.deleteAquariumById(aquariumId);
		return new ResponseEntity<AquariumImpl>(HttpStatus.NO_CONTENT);
	}

}
