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

import mvc.manager.AquariumManager;
import mvc.model.Aquarium;


@RestController
public class AquariumRESTController {
	
	@Autowired
	AquariumManager aquariumManager;

	// ------ Retrieve All Aquariums ---- //
	@RequestMapping(value = "/aquariums", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Aquarium>> listAllAquariums() {
		System.out.println("HELLO FROM REST CONTROLLER");
		List<Aquarium> aquariums = aquariumManager.findAllAquariums();
		if(aquariums.isEmpty()){
            return new ResponseEntity<List<Aquarium>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Aquarium>>(aquariums, HttpStatus.OK);
	}
	
	 //-------------------Retrieve Single Aquarium---------------------------- //
    
    @RequestMapping(value = "/aquarium/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Aquarium> getAquarium(@PathVariable("id") Integer id) {
        System.out.println("Fetching Aquarium with id " + id);
        Aquarium aquarium = aquariumManager.findById(id);
        if (aquarium == null) {
            System.out.println("Aquarium with id " + id + " not found");
            return new ResponseEntity<Aquarium>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Aquarium>(aquarium, HttpStatus.OK);
    }
	

	// -------------------Create an aquarium ------ //

	@RequestMapping(value = "/aquarium", method = RequestMethod.POST)
	public ResponseEntity<Void> createAquarium(@RequestBody Aquarium aquarium, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Aquarium " + aquarium.getName());

		if (aquariumManager.isAquariumExist(aquarium)) {
			System.out.println("A Aquarium with name " + aquarium.getName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		aquariumManager.addAquarium(aquarium);

		return new ResponseEntity<Void>(HttpStatus.CREATED);
		
	}
	
	//------------------- Update a aquarium ----------------------------- //
    
    @RequestMapping(value = "/aquarium/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Aquarium> updateAquarium(@PathVariable("id") Integer id, @RequestBody Aquarium aquarium) {
        System.out.println("Updating Aquarium " + id);
          
        Aquarium currentAquarium = aquariumManager.findById(id);
          
        if (currentAquarium==null) {
            System.out.println("Aquarium with id " + id + " not found");
            return new ResponseEntity<Aquarium>(HttpStatus.NOT_FOUND);
        }
  
        currentAquarium.setName(aquarium.getName());
        currentAquarium.setType(aquarium.getType());
        currentAquarium.setGallon(aquarium.getGallon());
        currentAquarium.setNotes(aquarium.getNotes());
        currentAquarium.setDate(aquarium.getDate());
          
        aquariumManager.updateAquarium(currentAquarium);
        return new ResponseEntity<Aquarium>(currentAquarium, HttpStatus.OK);
    }
  
     
     
    //------------------- Delete a aquarium --------------------------------------------------------
      
    @RequestMapping(value = "/aquarium/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Aquarium> deleteAquarium(@PathVariable("id") int id) {
        System.out.println("Fetching & Deleting aquarium with id " + id);
  
        Aquarium aquarium = aquariumManager.findById(id);
        if (aquarium == null) {
            System.out.println("Unable to delete. Aquarium with id " + id + " not found");
            return new ResponseEntity<Aquarium>(HttpStatus.NOT_FOUND);
        }
  
        aquariumManager.deleteAquariumById(id);
        return new ResponseEntity<Aquarium>(HttpStatus.NO_CONTENT);
    }
  
	
}