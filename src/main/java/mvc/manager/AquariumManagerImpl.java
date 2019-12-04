package mvc.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.model.Aquarium;
import mvc.services.AquariumService;

@Service
public class AquariumManagerImpl implements AquariumManager {

	@Autowired
	private AquariumService aquariumService;

	@Override
	public Aquarium findById(Integer id) {
		return aquariumService.findById(id);
	}

	@Override
	public Aquarium findByName(String name) {
		return aquariumService.findByName(name);
	}

	@Override
	public boolean addAquarium(Aquarium aquarium) {
		return aquariumService.addAquarium(aquarium);
	}

	@Override
	public boolean updateAquarium(Aquarium aquarium) {
		return aquariumService.updateAquarium(aquarium);
	}

	public List<Aquarium> findAllAquariums() {
		return aquariumService.findAllAquariums();
	}

	@Override
	public boolean isAquariumExist(Aquarium aquarium) {
		return aquariumService.isAquariumExist(aquarium);
	}

	@Override
	public boolean deleteAquariumById(Integer id) {
		return aquariumService.deleteAquariumById(id);

	}

}
