package mvc.controller.livestock;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import mvc.dao.aquarium.AquariumDaoImpl;
import mvc.entity.livestock.LivestockImpl;
import mvc.manager.livestock.LivestockManager;

@RequestMapping(value = "/livestocks")
@Controller
public class LivestockAsyncController {

	private final static Logger logger = Logger.getLogger(AquariumDaoImpl.class.getName());

	@Autowired
	private LivestockManager livestockManager;

	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockImpl>> listAllLivestock() {
		List<LivestockImpl> livestock = livestockManager.findAllLivestock();
		if (livestock.isEmpty()) {
			return new ResponseEntity<List<LivestockImpl>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<LivestockImpl>>(livestock, HttpStatus.OK);
	}

	@GetMapping(value = "/livestock/{livestockId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LivestockImpl> getLivestock(@PathVariable("livestockId") Integer livestockId) {
		System.out.println("Fetching Livestock with livestockId " + livestockId);
		LivestockImpl livestock = livestockManager.findById(livestockId);
		if (livestock == null) {
			logger.log(Level.INFO, "Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<LivestockImpl>(livestock, HttpStatus.OK);
	}

//	@PostMapping(value = "/create")
//	public ResponseEntity<Void> createLivestock(@RequestBody LivestockImpl livestock) {
//		logger.log(Level.INFO, "Creating Livestock " + livestock.getName());
//
//		if (livestockManager.isLivestockExist(livestock)) {
//			logger.log(Level.INFO, "A Livestock with name " + livestock.getName() + " already exist");
//			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
//		}
//		livestockManager.addLivestock(livestock);
//
//		return new ResponseEntity<Void>(HttpStatus.CREATED);
//
//	}

	@PutMapping(value = "/update/{livestockId}")
	public ResponseEntity<LivestockImpl> updateLivestock(@PathVariable("livestockId") Integer livestockId,
			@RequestBody LivestockImpl livestock) {
		logger.log(Level.INFO, "Updating Livestock " + livestockId);

		LivestockImpl currentLivestock = livestockManager.findById(livestockId);

		if (currentLivestock == null) {
			logger.log(Level.INFO, "Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}

		currentLivestock.setName(livestock.getName());
		currentLivestock.setSpecies(livestock.getSpecies());
		currentLivestock.setGender(livestock.getGender());
		currentLivestock.setNotes(livestock.getNotes());

		livestockManager.updateLivestock(currentLivestock);
		logger.log(Level.INFO, "this is update rest: " + currentLivestock);
		return new ResponseEntity<LivestockImpl>(currentLivestock, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete/{livestockId}")
	public ResponseEntity<LivestockImpl> deleteLivestock(@PathVariable("livestockId") int livestockId) {
		logger.log(Level.INFO, "Fetching & Deleting livestock with livestockId " + livestockId);

		LivestockImpl livestock = livestockManager.findById(livestockId);
		if (livestock == null) {
			System.out.println("Unable to delete. Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}

		livestockManager.deleteLivestockById(livestockId);
		return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
	}

}
