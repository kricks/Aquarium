package mvc.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.model.Aquarium;
import mvc.services.AquariumService;

@Service
public class AquariumManagerImpl implements AquariumManager {
	
	@Autowired
	AquariumService aquariumService;

	@Override
	public Aquarium findById(Long id) {
		return aquariumService.findById(id);
	}

	@Override
	public Aquarium findByName(String name) {
		return aquariumService.findByName(name);
	}

	@Override
	public void addAquarium(Aquarium aquarium) {
		aquariumService.addAquarium(aquarium);
	}

	@Override
	public void updateAquarium(Aquarium aquarium) {
		aquariumService.updateAquarium(aquarium);
	}

	@Override
	public List<Aquarium> findAllAquariums() {
		return aquariumService.findAllAquariums();
	}

	@Override
	public boolean isAquariumExist(Aquarium aquarium) {
		return aquariumService.isAquariumExist(aquarium);
	}

	@Override
	public void deleteAquariumById(Long id) {
		aquariumService.deleteAquariumById(id);
	}

}