package mvc.controller.aquarium;

import java.util.List;

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

import mvc.entity.aquarium.AquariumImpl;
import mvc.manager.aquarium.AquariumManager;

@RequestMapping(value = "/aquariums")
@Controller
public class AquariumAsyncController {

	@Autowired
	private AquariumManager aquariumManager;

	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<AquariumImpl>> listAllAquariums() {
		List<AquariumImpl> aquariums = aquariumManager.findAllAquariums();
		if (aquariums.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(aquariums, HttpStatus.OK);
	}

	@GetMapping(value = "/{aquariumId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AquariumImpl> getLivestockByAquariumId(@PathVariable("aquariumId") Integer aquariumId) {
		AquariumImpl aquarium = aquariumManager.findById(aquariumId);
		if (aquarium == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(aquarium, HttpStatus.OK);
	}

	@PutMapping(value = "/update/{aquariumId}")
	public ResponseEntity<AquariumImpl> updateAquarium(@PathVariable("aquariumId") Integer aquariumId,
			@RequestBody AquariumImpl aquarium) {
		aquariumManager.updateAquarium(aquarium);
		return new ResponseEntity<>(aquarium, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete/{aquariumId}")
	public ResponseEntity<AquariumImpl> deleteAquarium(@PathVariable("aquariumId") Integer aquariumId) {
		if (aquariumId == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		aquariumManager.deleteAquariumById(aquariumId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
