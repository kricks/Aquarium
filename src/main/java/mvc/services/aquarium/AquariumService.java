package mvc.services.aquarium;

import java.util.List;

import mvc.entity.aquarium.AquariumView;

public interface AquariumService {

	List<AquariumView> findAllAquariums();

	AquariumView findById(Integer aquariumId);

	AquariumView addAquarium(AquariumView aquarium);

	AquariumView updateAquarium(AquariumView aquarium);

	boolean deleteAquariumById(Integer aquariumId);

//	boolean isAquariumExist(AquariumImpl aquarium);

}
