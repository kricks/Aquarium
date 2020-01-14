package mvc.services.aquarium;

import java.util.List;

import mvc.entity.aquarium.AquariumImpl;

public interface AquariumService {

	List<AquariumImpl> findAllAquariums();

	AquariumImpl findById(Integer aquariumId);

	AquariumImpl addAquarium(AquariumImpl aquarium);

	AquariumImpl updateAquarium(AquariumImpl aquarium);

	boolean deleteAquariumById(Integer aquariumId);

//	boolean isAquariumExist(AquariumImpl aquarium);

}
