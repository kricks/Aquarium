package mvc.manager.livestock;

import java.util.List;

import mvc.entity.livestock.LivestockImpl;

public interface LivestockManager {

	LivestockImpl findById(Integer id);

	LivestockImpl findByName(String name);

	boolean addLivestock(LivestockImpl livestock);

	LivestockImpl updateLivestock(LivestockImpl livestock);

	boolean deleteLivestockById(Integer id);

	List<LivestockImpl> findAllLivestock();

	public boolean isLivestockExist(LivestockImpl livestock);

}
