package mvc.services;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumService {

	Aquarium findById(Long id);

	Aquarium findByName(String name);

	void addAquarium(Aquarium aquarium);

	void updateAquarium(Aquarium aquarium);

	void deleteAquariumById(Long id);

	List<Aquarium> findAllAquariums();

	public boolean isAquariumExist(Aquarium aquarium);

}