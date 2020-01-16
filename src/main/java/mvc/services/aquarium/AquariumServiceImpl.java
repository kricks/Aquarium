package mvc.services.aquarium;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import mvc.entity.aquarium.AquariumImpl;

@Service
@Transactional
public class AquariumServiceImpl implements AquariumService {

	public static final String BASE_URI = "http://localhost:8080/aquarium";
	public final RestTemplate restTemplate = new RestTemplate();
	static Logger logger = Logger.getLogger(AquariumServiceImpl.class);

	@Override
	public List<AquariumImpl> findAllAquariums() {
		ResponseEntity<List<AquariumImpl>> response = restTemplate.exchange(BASE_URI + "/all", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<AquariumImpl>>() {
				});
		return response.getBody();
	}

	@Override
	public AquariumImpl findById(Integer aquariumId) {
		String uri = String.join("", BASE_URI, "/{aquariumId}");
		System.out.println("aquarium service : " + aquariumId);
		return restTemplate.getForObject(BASE_URI + "/{aquariumId}", AquariumImpl.class, aquariumId);
	}

	@Override
	public AquariumImpl addAquarium(AquariumImpl aquarium) {
		AquariumImpl newAq = new AquariumImpl(aquarium);
		return restTemplate.postForObject(BASE_URI + "/create", newAq, AquariumImpl.class);
	}

	@Override
	public AquariumImpl updateAquarium(AquariumImpl aquarium) {
		Integer aquariumId = aquarium.getAquariumId();
		Map<String, Integer> params = new HashMap<>();
		params.put("aquariumId", aquariumId);
		restTemplate.put(BASE_URI + "/update/{aquariumId}", aquarium, params);
		return aquarium;
	}

//	@Override
//	public boolean isAquariumExist(AquariumImpl aquarium) {
//		return findById(aquarium.getId()) != null;
//	}
//
	@Override
	public boolean deleteAquariumById(Integer aquariumId) {
		String uri = BASE_URI + "/delete/{aquariumId}";

		if (aquariumId == null) {
			logger.error("Delete aquarium failed");
			return false;
		}
		restTemplate.delete(uri, Integer.toString(aquariumId), AquariumImpl.class);
		logger.info("Delete aquarium success");
		return true;
	}

}
