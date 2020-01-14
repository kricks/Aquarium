package mvc.services.aquarium;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import mvc.entity.aquarium.AquariumImpl;

@Service
@Transactional
public class AquariumServiceImpl implements AquariumService {

	public static final String BASE_URI = "http://localhost:8080/";
	public final RestTemplate restTemplate = new RestTemplate();

	@Override
	public List<AquariumImpl> findAllAquariums() {
		ResponseEntity<AquariumImpl[]> response = restTemplate.getForEntity(BASE_URI + "aquarium/all",
				AquariumImpl[].class);
		return Arrays.asList(response.getBody());
	}

	@Override
	public AquariumImpl findById(Integer aquariumId) {
		return restTemplate.getForObject(BASE_URI + "aquarium/{aquariumId}", AquariumImpl.class);
	}

	@Override
	public AquariumImpl addAquarium(AquariumImpl aquarium) {
		AquariumImpl newAq = new AquariumImpl(aquarium);
		return restTemplate.postForObject(BASE_URI + "aquarium/create", newAq, AquariumImpl.class);
	}

	@Override
	public AquariumImpl updateAquarium(AquariumImpl aquarium) {
		Integer aquariumId = aquarium.getAquariumId();
		Map<String, Integer> params = new HashMap<>();
		params.put("aquariumId", aquariumId);
		restTemplate.put(BASE_URI + "aquarium/update/{aquariumId}", aquarium, params);
		return aquarium;
	}

//	@Override
//	public boolean isAquariumExist(AquariumImpl aquarium) {
//		return FindById(aquarium.getId()) != null;
//	}
//
	@Override
	public boolean deleteAquariumById(Integer aquariumId) {
		String uri = BASE_URI + "aquarium/delete/{aquariumId}";

		if (aquariumId == null) {
			return false;
		}
		Map<String, Integer> params = new HashMap<>();
		params.put("aquariumId", aquariumId);
		restTemplate.delete(uri, params);
		return true;
	}

}
