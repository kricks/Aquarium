package mvc.manager.aquarium;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.entity.aquarium.AquariumView;
import mvc.services.aquarium.AquariumService;

@Service
public class AquariumManagerImpl implements AquariumManager {

	@Autowired
	private AquariumService aquariumService;

	@Override
	public List<AquariumView> findAllAquariums() {
		return aquariumService.findAllAquariums();
	}

	@Override
	public AquariumView findById(Integer aquariumId) {
		return aquariumService.findById(aquariumId);
	}

	@Override
	public AquariumView addAquarium(AquariumView aquarium) {
		return aquariumService.addAquarium(aquarium);
	}

	@Override
	public AquariumView updateAquarium(AquariumView aquarium) {
		return aquariumService.updateAquarium(aquarium);
	}

	@Override
	public boolean deleteAquariumById(Integer aquariumId) {
		return aquariumService.deleteAquariumById(aquariumId);
	}
}
