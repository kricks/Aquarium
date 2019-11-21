package mvc.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import mvc.model.Aquarium;
import mvc.services.AquariumService;

public class AquariumManagerImpl implements AquariumManager {
	
	@Autowired
	AquariumService aquariumService;

	@Override
	public Aquarium findById(Long id) {
		return aquariumService.findById(id);
	}

	@Override
	public Aquarium findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveAquarium(Aquarium aquarium) {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateAquarium(Aquarium aquarium) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Aquarium> findAllAquariums() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAquariumExist(Aquarium aquarium) {
		// TODO Auto-generated method stub
		return false;
	}

}
