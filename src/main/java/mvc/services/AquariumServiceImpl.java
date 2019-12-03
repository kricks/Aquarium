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
	public Aquarium findById(Long id) {
		return aquariumDao.findById(id);
	}

	@Override
	public Aquarium findByName(String name) {
		return aquariumDao.findByName(name);
	}

	@Override
	public void addAquarium(Aquarium aquarium) {
		aquariumDao.addAquarium(aquarium);
	}

	@Override
	public void updateAquarium(Aquarium aquarium) {
		aquariumDao.updateAquarium(aquarium);
	}

	@Override
	public boolean isAquariumExist(Aquarium aquarium) {
		return findByName(aquarium.getName()) != null;
	}

	@Override
	public void deleteAquariumById(Long id) {
		aquariumDao.deleteAquariumById(id);
	}



}