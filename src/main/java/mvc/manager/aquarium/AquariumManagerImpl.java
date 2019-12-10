package mvc.manager.aquarium;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.entity.aquarium.AquariumImpl;
import mvc.services.aquarium.AquariumService;

@Service
public class AquariumManagerImpl implements AquariumManager {

	@Autowired
	private AquariumService aquariumService;

	@Override
	public AquariumImpl findById(Integer aquariumId) {
		return aquariumService.findById(aquariumId);
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
	public boolean deleteAquariumById(Integer aquariumId) {
		return aquariumService.deleteAquariumById(aquariumId);

	}

}
