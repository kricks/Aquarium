package mvc.manager;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumManager {
	
	Aquarium findById(Long id);

	Aquarium findByName(String name);

	void addAquarium(Aquarium aquarium);

	void updateAquarium(Aquarium aquarium);

	void deleteAquariumById(Long id);

	List<Aquarium> findAllAquariums();

	void deleteAllAquariums();

	public boolean isAquariumExist(Aquarium aquarium);
}
