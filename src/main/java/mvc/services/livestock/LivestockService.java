package mvc.services.livestock;

import java.util.List;

import mvc.entity.livestock.LivestockImpl;

public interface LivestockService {

	LivestockImpl findById(Integer id);

	LivestockImpl findByName(String name);

	boolean addLivestock(LivestockImpl livestock);

	LivestockImpl updateLivestock(LivestockImpl livestock);

	boolean deleteLivestockById(Integer id);

	List<LivestockImpl> findAllLivestock();

	boolean isLivestockExist(LivestockImpl livestock);

	List<LivestockImpl> findLivestockByFkAquariumId(Integer fkAquariumId);

}
