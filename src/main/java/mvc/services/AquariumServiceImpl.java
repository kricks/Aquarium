package mvc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mvc.dao.AquariumDao;
import mvc.model.AquariumImpl;

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
	public AquariumImpl findById(Integer id) {
		return aquariumDao.findById(id);
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
	public boolean deleteAquariumById(Integer id) {
		return aquariumDao.deleteAquariumById(id);
	}

}
