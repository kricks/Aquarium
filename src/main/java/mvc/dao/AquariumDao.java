package mvc.dao;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumDao {

	Aquarium findById(Long id);

	Aquarium findByName(String name);

	void saveAquarium(Aquarium aquarium);

	List<Aquarium> findAllAquariums();

	void updateAquarium(Aquarium aquarium);

	void deleteAquariumById(Long id);

	void deleteAllAquariums();

}
