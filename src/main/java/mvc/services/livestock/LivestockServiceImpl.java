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

import mvc.entity.livestock.LivestockImpl;

@Service
@Transactional
public class LivestockServiceImpl implements LivestockService {

	public static final String BASE_URI = "http://localhost:8080/livestock";
	public final RestTemplate restTemplate = new RestTemplate();
	static Logger logger = Logger.getLogger(LivestockServiceImpl.class);

	@Override
	public List<LivestockImpl> findAllLivestock() {
		String uri = BASE_URI + "/all";
		ResponseEntity<List<LivestockImpl>> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<LivestockImpl>>() {
				});
		return response.getBody();
	}

	@Override
	public ResponseEntity<LivestockImpl> findById(Integer livestockId) {
		String uri = BASE_URI + "/{livestockId}";
		System.out.println("find by id front end: " + livestockId);
		ResponseEntity<LivestockImpl> response = restTemplate.getForEntity(uri, LivestockImpl.class);
		return response;
	}

	@Override
	public List<LivestockImpl> findLivestockByFkAquariumId(Integer fkAquariumId) {
		final String uri = String.join("", BASE_URI, "/aqFk/{fkAquariumId}");
		System.out.println("fkaq front end 11 : " + fkAquariumId + uri);
		ResponseEntity<List<LivestockImpl>> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<LivestockImpl>>() {
				}, fkAquariumId);
		System.out.println("fkaq front end 22 : " + response.getBody() + fkAquariumId);
		return response.getBody();
	}

	@Override
	public LivestockImpl addLivestock(LivestockImpl livestock) {
		String uri = BASE_URI + "/create";
		LivestockImpl added = new LivestockImpl(livestock);
		return restTemplate.postForObject(uri, added, LivestockImpl.class);
	}

	@Override
	public LivestockImpl updateLivestock(LivestockImpl livestock) {
		String uri = BASE_URI + "/update/{livestockId}";
		Integer livestockId = livestock.getLivestockId();
		Map<String, Integer> params = new HashMap<>();
		System.out.println("update front 1");
		params.put("livestockId", livestockId);
		restTemplate.put(uri, livestock, params);
		System.out.println("update front 2");
		return livestock;
	}

	@Override
	public boolean deleteLivestockById(Integer livestockId) {
		String uri = BASE_URI + "/delete/{livestockId}";
		if (livestockId == null) {
			logger.error("Delete aquarium failed");
			return false;
		}
		restTemplate.delete(uri, Integer.toString(livestockId), LivestockImpl.class);
		logger.info("Delete aquarium success");
		return true;
	}

	@Override
	public boolean isLivestockExist(LivestockImpl livestock) {
		// TODO Auto-generated method stub
		return false;
	}

}
