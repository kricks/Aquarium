package mvc.manager;

import java.util.List;

import mvc.model.aquarium.AquariumImpl;

public interface AquariumManager {

	AquariumImpl findById(Integer id);

	AquariumImpl findByName(String name);

	boolean addAquarium(AquariumImpl aquarium);

	AquariumImpl updateAquarium(AquariumImpl aquarium);

	boolean deleteAquariumById(Integer id);

	List<AquariumImpl> findAllAquariums();

	public boolean isAquariumExist(AquariumImpl aquarium);
}
