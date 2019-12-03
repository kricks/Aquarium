package mvc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mvc.dao.AquariumDao;
import mvc.model.Aquarium;

@Service
@Transactional
public class AquariumServiceImpl implements AquariumService {
	
	@Autowired
	AquariumDao aquariumDao;

	@Override
	public List<Aquarium> findAllAquariums() {
		return aquariumDao.findAllAquariums();
	}

	@Override
	public Aquarium findById(Integer id) {
		return aquariumDao.findById(id);
	}

	@Override
	public Aquarium findByName(String name) {
		return aquariumDao.findByName(name);
	}

	@Override
	public boolean addAquarium(Aquarium aquarium) {
		return aquariumDao.addAquarium(aquarium);
	}

	@Override
	public boolean updateAquarium(Aquarium aquarium) {
		return aquariumDao.updateAquarium(aquarium);
	}

	@Override
	public boolean isAquariumExist(Aquarium aquarium) {
		return findByName(aquarium.getName()) != null;
	}

	@Override
	public boolean deleteAquariumById(Integer id) {
		return aquariumDao.deleteAquariumById(id);
	}



}