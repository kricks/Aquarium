package mvc.services;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumService {

	Aquarium findById(Long id);

	Aquarium findByName(String name);

	void saveAquarium(Aquarium aquarium);

	void updateAquarium(Aquarium aquarium);

	void deleteAquariumById(Long id);

	List<Aquarium> findAllAquariums();

	void deleteAllAquariums();

	public boolean isAquariumExist(Aquarium aquarium);

}
