  package mvc.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import mvc.model.Tank;

@Service
public class TankServiceImpl implements TankService {

	private static final AtomicLong counter = new AtomicLong();

	private static List<Tank> tanks;

	static {
		tanks = populateDummyTanks();
	}

	public List<Tank> findAllTanks() {
		return tanks;
	}

	public Tank findById(Long id) {
		for (Tank tank : tanks) {
			if (tank.getId() == id) {
				return tank;
			}
		}
		return null;
	}

	public Tank findByName(String name) {
		for (Tank tank : tanks) {
			if (tank.getName().equalsIgnoreCase(name)) {
				return tank;
			}
		}
		return null;
	}

	public void saveTank(Tank tank) {
		tank.setId(counter.incrementAndGet());
		tanks.add(tank);

	}

	public void updateTank(Tank tank) {
		int index = tanks.indexOf(tank);
		tanks.set(index, tank);

	}

	public boolean isTankExist(Tank tank) {
		return findByName(tank.getName()) != null;
	}

	public static List<Tank> populateDummyTanks() {
		List<Tank> tanks = new ArrayList<Tank>();
		tanks.add(new Tank(counter.incrementAndGet(), "Clown Harem", "Salt Water", 30, "Living Room"));
		tanks.add(new Tank(counter.incrementAndGet(), "Predator Tank", "Salt Water", 500, "Study"));
		tanks.add(new Tank(counter.incrementAndGet(), "Cichlids", "Fresh Water", 50, "Study"));
		tanks.add(new Tank(counter.incrementAndGet(), "Corals", "Salt Water", 100, "Garage"));
		
		System.out.println("THIS IS TANKSERVICEIMPL: " + tanks);

		return tanks;
	}

}
