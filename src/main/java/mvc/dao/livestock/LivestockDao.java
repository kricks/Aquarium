package mvc.dao.livestock;

import java.util.List;

import mvc.model.livestock.LivestockImpl;

public interface LivestockDao {

	LivestockImpl findById(Integer id);

	LivestockImpl findByName(String name);

	boolean addLivestock(LivestockImpl livestock);

	List<LivestockImpl> findAllLivestock();

	LivestockImpl updateLivestock(LivestockImpl livestock);

	boolean deleteLivestockById(Integer id);

}
