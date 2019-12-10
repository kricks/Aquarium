package mvc.services.aquarium;

import java.util.List;

import mvc.entity.aquarium.AquariumImpl;

public interface AquariumService {

	AquariumImpl findById(Integer aquariumId);

	AquariumImpl findByName(String name);

	boolean addAquarium(AquariumImpl aquarium);

	AquariumImpl updateAquarium(AquariumImpl aquarium);

	boolean deleteAquariumById(Integer aquariumId);

	List<AquariumImpl> findAllAquariums();

	public boolean isAquariumExist(AquariumImpl aquarium);

}
