package mvc.manager.aquarium;

import java.util.List;

import mvc.entity.aquarium.AquariumView;

public interface AquariumManager {

	List<AquariumView> findAllAquariums();

	AquariumView findById(Integer aquariumId);

	AquariumView addAquarium(AquariumView aquarium);

	AquariumView updateAquarium(AquariumView aquarium);

	boolean deleteAquariumById(Integer aquariumId);

}
