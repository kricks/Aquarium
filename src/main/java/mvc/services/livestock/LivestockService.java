package mvc.services.livestock;

import java.util.List;

import org.springframework.http.ResponseEntity;

import mvc.entity.livestock.LivestockImpl;

public interface LivestockService {

	List<LivestockImpl> findAllLivestock();

	ResponseEntity<LivestockImpl> findById(Integer id);

	List<LivestockImpl> findLivestockByFkAquariumId(Integer fkAquariumId);

	LivestockImpl addLivestock(LivestockImpl livestock);

	LivestockImpl updateLivestock(LivestockImpl livestock);

	boolean deleteLivestockById(Integer id);

	boolean isLivestockExist(LivestockImpl livestock);
}
