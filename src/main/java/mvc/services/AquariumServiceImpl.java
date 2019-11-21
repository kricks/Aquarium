package mvc.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import mvc.model.Aquarium;

@Service
public class AquariumServiceImpl implements AquariumService {

	private static final AtomicLong counter = new AtomicLong();

	private static List<Aquarium> aquariums;

	static {
		aquariums = populateDummyAquariums();
	}

	public List<Aquarium> findAllAquariums() {
		return aquariums;
	}

	public Aquarium findById(Long id) {
		for (Aquarium aquarium : aquariums) {
			if (aquarium.getId() == id) {
				return aquarium;
			}
		}
		return null;
	}

	public Aquarium findByName(String name) {
		for (Aquarium aquarium : aquariums) {
			if (aquarium.getName().equalsIgnoreCase(name)) {
				return aquarium;
			}
		}
		return null;
	}

	public void saveAquarium(Aquarium aquarium) {
		aquarium.setId(counter.incrementAndGet());
		aquariums.add(aquarium);

	}

	public void updateAquarium(Aquarium aquarium) {
		int index = aquariums.indexOf(aquarium);
		aquariums.set(index, aquarium);

	}

	public boolean isAquariumExist(Aquarium aquarium) {
		return findByName(aquarium.getName()) != null;
	}

	public static List<Aquarium> populateDummyAquariums() {
		List<Aquarium> aquariums = new ArrayList<Aquarium>();
		aquariums.add(new Aquarium(counter.incrementAndGet(), "Clown Harem", "Salt Water", 30, "Living Room"));
		aquariums.add(new Aquarium(counter.incrementAndGet(), "Predator Aquarium", "Salt Water", 500, "Study"));
		aquariums.add(new Aquarium(counter.incrementAndGet(), "Cichlids", "Fresh Water", 50, "Study"));
		aquariums.add(new Aquarium(counter.incrementAndGet(), "Corals", "Salt Water", 100, "Garage"));
		
		System.out.println("THIS IS TANKSERVICEIMPL: " + aquariums);

		return aquariums;
	}

}
