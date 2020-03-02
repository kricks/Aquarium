package mvc.manager.livestock;

import java.util.List;

import mvc.entity.livestock.LivestockView;

public interface LivestockManager {

	LivestockView findById(Integer id);

	LivestockView addLivestock(LivestockView livestock);

	LivestockView updateLivestock(LivestockView livestock);

	boolean deleteLivestockById(Integer id);

	List<LivestockView> findAllLivestock();

	List<LivestockView> findLivestockByFkAquariumId(Integer fkAquariumId);

}
