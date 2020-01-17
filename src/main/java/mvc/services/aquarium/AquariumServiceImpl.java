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

import mvc.entity.aquarium.AquariumView;

@Service
@Transactional
public class AquariumServiceImpl implements AquariumService {

	public static final String BASE_URI = "http://localhost:8080/aquarium";
	public final RestTemplate restTemplate = new RestTemplate();
	static Logger logger = Logger.getLogger(AquariumServiceImpl.class);

	@Override
	public List<AquariumView> findAllAquariums() {
		System.out.println("find all front service 1");
		ResponseEntity<List<AquariumView>> response = restTemplate.exchange(BASE_URI + "/all", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<AquariumView>>() {
				});
		System.out.println("find all front service 2");
		return response.getBody();
	}

	@Override
	public AquariumView findById(Integer aquariumId) {
		String uri = String.join("", BASE_URI, "/{aquariumId}");
		System.out.println("aquarium service : " + aquariumId);
		return restTemplate.getForObject(BASE_URI + "/{aquariumId}", AquariumView.class, aquariumId);
	}

	@Override
	public AquariumView addAquarium(AquariumView aquarium) {
		String uri = String.join("", BASE_URI, "/create");
		return restTemplate.postForObject(uri, aquarium, AquariumView.class);
	}

	@Override
	public AquariumView updateAquarium(AquariumView aquarium) {
		Integer aquariumId = aquarium.getAquariumId();
		Map<String, Integer> params = new HashMap<>();
		params.put("aquariumId", aquariumId);
		restTemplate.put(BASE_URI + "/update/{aquariumId}", aquarium, params);
		return aquarium;
	}

//	@Override
//	public boolean isAquariumExist(AquariumView aquarium) {
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
		restTemplate.delete(uri, Integer.toString(aquariumId), AquariumView.class);
		logger.info("Delete aquarium success");
		return true;
	}

}
