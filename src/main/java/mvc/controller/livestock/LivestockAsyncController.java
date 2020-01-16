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

import mvc.entity.livestock.LivestockImpl;
import mvc.manager.livestock.LivestockManager;

@RequestMapping(value = "/livestock")
@RestController
public class LivestockAsyncController {

	@Autowired
	private LivestockManager livestockManager;

	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockImpl>> listAllLivestock() {
		List<LivestockImpl> livestock = livestockManager.findAllLivestock();
		if (livestock.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(livestock, HttpStatus.OK);
	}

	@GetMapping(value = "/{livestockId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LivestockImpl> getLivestock(@PathVariable("livestockId") Integer livestockId) {
		System.out.println("Livestockid controller : 1" + livestockId);
		ResponseEntity<LivestockImpl> livestock = livestockManager.findById(livestockId);
		System.out.println("Livestockid controller : 2 " + livestockId);
		return livestock;
//		if (livestock == null) {
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		}
//
//		return new ResponseEntity<>(livestock, HttpStatus.OK);
	}

	@GetMapping(value = "/aq/{fkAquariumId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<LivestockImpl>> findLivestockByFkAquariumId(
			@PathVariable("fkAquariumId") Integer fkAquariumId) {
		System.out.println("Livestock controller : 1 " + fkAquariumId);
		List<LivestockImpl> aqId = livestockManager.findLivestockByFkAquariumId(fkAquariumId);
		System.out.println("Livestock controller : 2 " + fkAquariumId);
		if (aqId == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(aqId, HttpStatus.OK);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<Void> createLivestock(@RequestBody LivestockImpl livestock) {
//		if (livestockManager.isLivestockExist(livestock)) {
//			return new ResponseEntity<>(HttpStatus.CONFLICT);
//		}
		livestockManager.addLivestock(livestock);

		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping(value = "/update/{livestockId}")
	public ResponseEntity<LivestockImpl> updateLivestock(@PathVariable("livestockId") Integer livestockId,
			@RequestBody LivestockImpl livestock) {
		System.out.println("update front controller 1");
		livestockManager.updateLivestock(livestock);
		System.out.println("update front controller 2");
		return new ResponseEntity<>(livestock, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete/{livestockId}")
	public ResponseEntity<LivestockImpl> deleteLivestock(@PathVariable("livestockId") int livestockId) {

		ResponseEntity<LivestockImpl> livestock = livestockManager.findById(livestockId);
		if (livestock == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

		livestockManager.deleteLivestockById(livestockId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
