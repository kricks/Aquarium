package mvc.manager;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumManager {

	Aquarium findById(Integer id);

	Aquarium findByName(String name);

	boolean addAquarium(Aquarium aquarium);

	Aquarium updateAquarium(Aquarium aquarium);

	boolean deleteAquariumById(Integer id);

	List<Aquarium> findAllAquariums();

	public boolean isAquariumExist(Aquarium aquarium);
}
