package mvc.dao;

import java.util.List;

import mvc.model.AquariumImpl;

public interface AquariumDao {

	AquariumImpl findById(Integer id);

	AquariumImpl findByName(String name);

	boolean addAquarium(AquariumImpl aquarium);

	List<AquariumImpl> findAllAquariums();

	AquariumImpl updateAquarium(AquariumImpl aquarium);

	boolean deleteAquariumById(Integer id);

}