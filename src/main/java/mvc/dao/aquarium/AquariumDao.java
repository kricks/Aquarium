package mvc.dao.aquarium;

import java.util.List;

import mvc.entity.aquarium.AquariumImpl;

public interface AquariumDao {

	AquariumImpl findById(Integer aquariumId);

	AquariumImpl findByName(String name);

	boolean addAquarium(AquariumImpl aquarium);

	List<AquariumImpl> findAllAquariums();

	AquariumImpl updateAquarium(AquariumImpl aquarium);

	boolean deleteAquariumById(Integer aquariumId);

}