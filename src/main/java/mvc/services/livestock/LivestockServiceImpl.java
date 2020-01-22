package mvc.services.livestock;

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

import mvc.entity.livestock.LivestockView;

@Service
@Transactional
public class LivestockServiceImpl implements LivestockService {

	public static final String BASE_URI = "http://localhost:8080/livestock";
	public final RestTemplate restTemplate = new RestTemplate();
	static Logger logger = Logger.getLogger(LivestockServiceImpl.class);

	@Override
	public List<LivestockView> findAllLivestock() {
		String uri = BASE_URI + "/all";
		ResponseEntity<List<LivestockView>> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<LivestockView>>() {
				});
		return response.getBody();
	}

	@Override
	public LivestockView findById(Integer livestockId) {
		String uri = String.join("", BASE_URI, "/{livestockId}");
		ResponseEntity<LivestockView> response = restTemplate.getForEntity(uri, LivestockView.class, livestockId);
		return response.getBody();
	}

	@Override
	public List<LivestockView> findLivestockByFkAquariumId(Integer fkAquariumId) {
		final String uri = String.join("", BASE_URI, "/aqFk/{fkAquariumId}");
		ResponseEntity<List<LivestockView>> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<LivestockView>>() {
				}, fkAquariumId);
		return response.getBody();
	}

	@Override
	public LivestockView addLivestock(LivestockView livestock) {
		String uri = BASE_URI + "/create";
		return restTemplate.postForObject(uri, livestock, LivestockView.class);
	}

	@Override
	public LivestockView updateLivestock(LivestockView livestock) {
		String uri = BASE_URI + "/update/{livestockId}";
		Integer livestockId = livestock.getLivestockId();
		Map<String, Integer> params = new HashMap<>();
		params.put("livestockId", livestockId);
		restTemplate.put(uri, livestock, params);
		return livestock;
	}

	@Override
	public boolean deleteLivestockById(Integer livestockId) {
		String uri = BASE_URI + "/delete/{livestockId}";
		if (livestockId == null) {
			logger.error("Delete aquarium failed");
			return false;
		}
		restTemplate.delete(uri, Integer.toString(livestockId), LivestockView.class);
		logger.info("Delete aquarium success");
		return true;
	}
}
