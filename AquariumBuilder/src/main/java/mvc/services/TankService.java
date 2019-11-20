package mvc.services;

import java.util.List;

import mvc.model.Tank;

public interface TankService {

	Tank findById(Long id);

	Tank findByName(String name);

	void saveTank(Tank tank);

	void updateTank(Tank tank);

	List<Tank> findAllTanks();

	public boolean isTankExist(Tank tank);

}
