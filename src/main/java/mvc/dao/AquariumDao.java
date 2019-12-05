package mvc.dao;

import java.util.List;

import mvc.model.Aquarium;

public interface AquariumDao {

	Aquarium findById(Integer id);

	Aquarium findByName(String name);

	boolean addAquarium(Aquarium aquarium);

	List<Aquarium> findAllAquariums();

	Aquarium updateAquarium(Aquarium aquarium);

	boolean deleteAquariumById(Integer id);

}