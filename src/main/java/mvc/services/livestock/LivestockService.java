package mvc.services.livestock;

import java.util.List;

import mvc.entity.livestock.LivestockView;

public interface LivestockService {

	List<LivestockView> findAllLivestock();

	LivestockView findById(Integer id);

	List<LivestockView> findLivestockByFkAquariumId(Integer fkAquariumId);

	LivestockView addLivestock(LivestockView livestock);

	LivestockView updateLivestock(LivestockView livestock);

	boolean deleteLivestockById(Integer id);
}
