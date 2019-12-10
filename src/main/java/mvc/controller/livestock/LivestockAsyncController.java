package mvc.controller.livestock;

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

import mvc.entity.livestock.LivestockImpl;
import mvc.manager.livestock.LivestockManager;

@RequestMapping(value = "/livestocks")
@Controller
public class LivestockAsyncController {

	@Autowired
	private LivestockManager livestockManager;

	// ------ Retrieve All Livestock ---- //
	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockImpl>> listAllLivestock() {
		System.out.println("HELLO FROM REST CONTROLLER");
		List<LivestockImpl> livestock = livestockManager.findAllLivestock();
		if (livestock.isEmpty()) {
			return new ResponseEntity<List<LivestockImpl>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<LivestockImpl>>(livestock, HttpStatus.OK);
	}

	// -------------------Retrieve Single Livestock---------------------------- //

	@GetMapping(value = "/livestock/{livestockId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LivestockImpl> getLivestock(@PathVariable("livestockId") Integer livestockId) {
		System.out.println("Fetching Livestock with livestockId " + livestockId);
		LivestockImpl livestock = livestockManager.findById(livestockId);
		if (livestock == null) {
			System.out.println("Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<LivestockImpl>(livestock, HttpStatus.OK);
	}

	// -------------------Create an livestock ------ //

	@PostMapping(value = "/create")
	public ResponseEntity<Void> createLivestock(@RequestBody LivestockImpl livestock) {
		System.out.println("Creating Livestock " + livestock.getName());

		if (livestockManager.isLivestockExist(livestock)) {
			System.out.println("A Livestock with name " + livestock.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		livestockManager.addLivestock(livestock);

		return new ResponseEntity<Void>(HttpStatus.CREATED);

	}

	// ------------------- Update a livestock ----------------------------- //

	@PutMapping(value = "/update/{livestockId}")
	public ResponseEntity<LivestockImpl> updateLivestock(@PathVariable("livestockId") Integer livestockId,
			@RequestBody LivestockImpl livestock) {
		System.out.println("Updating Livestock " + livestockId);

		LivestockImpl currentLivestock = livestockManager.findById(livestockId);

		if (currentLivestock == null) {
			System.out.println("Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}

		currentLivestock.setName(livestock.getName());
		currentLivestock.setSpecies(livestock.getSpecies());
		currentLivestock.setGender(livestock.getGender());
		currentLivestock.setNotes(livestock.getNotes());

		livestockManager.updateLivestock(currentLivestock);
		System.out.println("this is update rest: " + currentLivestock);
		return new ResponseEntity<LivestockImpl>(currentLivestock, HttpStatus.OK);
	}

	// ------------------- Delete a livestock ----------- //

	@DeleteMapping(value = "/delete/{livestockId}")
	public ResponseEntity<LivestockImpl> deleteLivestock(@PathVariable("livestockId") int livestockId) {
		System.out.println("Fetching & Deleting livestock with livestockId " + livestockId);

		LivestockImpl livestock = livestockManager.findById(livestockId);
		if (livestock == null) {
			System.out.println("Unable to delete. Livestock with livestockId " + livestockId + " not found");
			return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
		}

		livestockManager.deleteLivestockById(livestockId);
		return new ResponseEntity<LivestockImpl>(HttpStatus.NO_CONTENT);
	}

}
