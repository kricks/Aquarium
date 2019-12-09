package mvc.services.aquarium;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mvc.dao.aquarium.AquariumDao;
import mvc.model.aquarium.AquariumImpl;

@Service
@Transactional
public class AquariumServiceImpl implements AquariumService {

	@Autowired
	private AquariumDao aquariumDao;

	@Override
	public List<AquariumImpl> findAllAquariums() {
		return aquariumDao.findAllAquariums();
	}

	@Override
	public AquariumImpl findById(Integer aquariumId) {
		return aquariumDao.findById(aquariumId);
	}

	@Override
	public AquariumImpl findByName(String name) {
		return aquariumDao.findByName(name);
	}

	@Override
	public boolean addAquarium(AquariumImpl aquarium) {
		return aquariumDao.addAquarium(aquarium);
	}

	@Override
	public AquariumImpl updateAquarium(AquariumImpl aquarium) {
		return aquariumDao.updateAquarium(aquarium);
	}

	@Override
	public boolean isAquariumExist(AquariumImpl aquarium) {
		return findByName(aquarium.getName()) != null;
	}

	@Override
	public boolean deleteAquariumById(Integer aquariumId) {
		return aquariumDao.deleteAquariumById(aquariumId);
	}

}
