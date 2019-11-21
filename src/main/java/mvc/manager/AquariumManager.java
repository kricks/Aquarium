package mvc.manager;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumManager {
	
	Aquarium findById(Long id);

	Aquarium findByName(String name);

	void saveAquarium(Aquarium aquarium);

	void updateAquarium(Aquarium aquarium);

	List<Aquarium> findAllAquariums();

	public boolean isAquariumExist(Aquarium aquarium);
}
