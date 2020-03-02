package mvc.controller.livestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mvc.entity.livestock.LivestockView;
import mvc.manager.livestock.LivestockManager;

@RequestMapping(value = "/livestock")
@RestController
public class LivestockController {

	@Autowired
	private LivestockManager livestockManager;

	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockView>> listAllLivestock() {
		List<LivestockView> livestock = livestockManager.findAllLivestock();
		if (livestock.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(livestock, HttpStatus.OK);
	}

	@GetMapping(value = "/{livestockId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LivestockView> getLivestock(@PathVariable("livestockId") Integer livestockId) {
		LivestockView livestock = livestockManager.findById(livestockId);

		if (livestock == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(livestock, HttpStatus.OK);
	}

	@GetMapping(value = "/aq/{fkAquariumId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockView>> findLivestockByFkAquariumId(
			@PathVariable("fkAquariumId") Integer fkAquariumId) {
		List<LivestockView> aqId = livestockManager.findLivestockByFkAquariumId(fkAquariumId);
		if (aqId == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(aqId, HttpStatus.OK);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<Void> createLivestock(@RequestBody LivestockView livestock) {
		livestockManager.addLivestock(livestock);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping(value = "/update/{livestockId}")
	public ResponseEntity<LivestockView> updateLivestock(@PathVariable("livestockId") Integer livestockId,
			@RequestBody LivestockView livestock) {
		livestockManager.updateLivestock(livestock);
		return new ResponseEntity<>(livestock, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete/{livestockId}")
	public ResponseEntity<LivestockView> deleteLivestock(@PathVariable("livestockId") int livestockId) {
		livestockManager.deleteLivestockById(livestockId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
