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
import org.springframework.web.bind.annotation.PostMapping;
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

	// get all
	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockImpl>> listAllLivestock() {
		List<LivestockImpl> livestock = livestockManager.findAllLivestock();
		if (livestock.isEmpty()) {
			return new ResponseEntity<List<LivestockImpl>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<LivestockImpl>>(livestock, HttpStatus.OK);
	}

	// get livestock by id
	@GetMapping(value = "/livestock/{livestockId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LivestockImpl> getLivestock(@PathVariable("livestockId") Integer livestockId) {
		logger.log(Level.INFO, "Fetching Livestock with livestockId " + livestockId);

		LivestockImpl livestock = livestockManager.findById(livestockId);

		if (livestock == null) {
			logger.log(Level.INFO, "Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<LivestockImpl>(livestock, HttpStatus.OK);
	}

	// get livesstock by aquariumID

	@GetMapping(value = "/aq/{fkAquariumId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockImpl>> findLivestockByFkAquariumId(

			@PathVariable("fkAquariumId") Integer fkAquariumId) {
		logger.log(Level.INFO, "Fetching Livestock with livestockId " + fkAquariumId);

		List<LivestockImpl> aqId = livestockManager.findLivestockByFkAquariumId(fkAquariumId);

		if (aqId == null) {
			logger.log(Level.INFO, "Livestock with fkAquariumId " + fkAquariumId + " not found");
			return new ResponseEntity<List<LivestockImpl>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<LivestockImpl>>(aqId, HttpStatus.OK);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<Void> createLivestock(@RequestBody LivestockImpl livestock) {
		logger.log(Level.INFO, "Creating Livestock " + livestock.getName());

		if (livestockManager.isLivestockExist(livestock)) {
			logger.log(Level.INFO, "A Aquarium with name " + livestock.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		livestockManager.addLivestock(livestock);

		return new ResponseEntity<Void>(HttpStatus.CREATED);

	}

	// update livestock by lsid
	@PutMapping(value = "/update/{livestockId}")
	public ResponseEntity<LivestockImpl> updateLivestock(@PathVariable("livestockId") Integer livestockId,
			@RequestBody LivestockImpl livestock) {
		logger.log(Level.INFO, "Updating Livestock " + livestockId);

		System.out.println("asdfjkasdkflj;lakdjsf " + livestock.getFkAquariumId());
		System.out.println("aasssd " + livestock.getName());

		LivestockImpl currentLivestock = livestockManager.findById(livestockId);

		if (currentLivestock == null) {
			logger.log(Level.INFO, "Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}
		currentLivestock.setFkAquariumId(livestock.getFkAquariumId());
		currentLivestock.setName(livestock.getName());
		currentLivestock.setSpecies(livestock.getSpecies());
		currentLivestock.setGender(livestock.getGender());
		currentLivestock.setNotes(livestock.getNotes());

		System.out.println("asdfjkasdkflj;lakdjsf 122121 " + currentLivestock.getFkAquariumId());
		System.out.println("aasssd 2222" + currentLivestock.getName());

		livestockManager.updateLivestock(currentLivestock);
		logger.log(Level.INFO, "this is update rest: " + currentLivestock);
		return new ResponseEntity<LivestockImpl>(currentLivestock, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete/{livestockId}")
	public ResponseEntity<LivestockImpl> deleteLivestock(@PathVariable("livestockId") int livestockId) {
		logger.log(Level.INFO, "Fetching & Deleting livestock with livestockId " + livestockId);

		LivestockImpl livestock = livestockManager.findById(livestockId);
		if (livestock == null) {
			logger.log(Level.INFO, "Unable to delete. Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}

		livestockManager.deleteLivestockById(livestockId);
		return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
	}

}
