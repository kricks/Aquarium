package mvc.services;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumService {

	Aquarium findById(Integer id);

	Aquarium findByName(String name);

	boolean addAquarium(Aquarium aquarium);

	boolean updateAquarium(Aquarium aquarium);

	boolean deleteAquariumById(Integer id);

	List<Aquarium> findAllAquariums();

	public boolean isAquariumExist(Aquarium aquarium);

}
