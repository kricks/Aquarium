package mvc.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.model.aquarium.AquariumImpl;
import mvc.services.AquariumService;

@Service
public class AquariumManagerImpl implements AquariumManager {

	@Autowired
	private AquariumService aquariumService;

	@Override
	public AquariumImpl findById(Integer id) {
		return aquariumService.findById(id);
	}

	@Override
	public AquariumImpl findByName(String name) {
		return aquariumService.findByName(name);
	}

	@Override
	public boolean addAquarium(AquariumImpl aquarium) {
		return aquariumService.addAquarium(aquarium);
	}

	@Override
	public AquariumImpl updateAquarium(AquariumImpl aquarium) {
		return aquariumService.updateAquarium(aquarium);
	}

	public List<AquariumImpl> findAllAquariums() {
		return aquariumService.findAllAquariums();
	}

	@Override
	public boolean isAquariumExist(AquariumImpl aquarium) {
		return aquariumService.isAquariumExist(aquarium);
	}

	@Override
	public boolean deleteAquariumById(Integer id) {
		return aquariumService.deleteAquariumById(id);

	}

}
