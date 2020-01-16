package mvc.manager.livestock;

import java.util.List;

import org.springframework.http.ResponseEntity;

import mvc.entity.livestock.LivestockImpl;

public interface LivestockManager {

	ResponseEntity<LivestockImpl> findById(Integer id);

	LivestockImpl addLivestock(LivestockImpl livestock);

	LivestockImpl updateLivestock(LivestockImpl livestock);

	boolean deleteLivestockById(Integer id);

	List<LivestockImpl> findAllLivestock();

	boolean isLivestockExist(LivestockImpl livestock);

	List<LivestockImpl> findLivestockByFkAquariumId(Integer fkAquariumId);

}
