package mvc.manager.livestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.entity.livestock.LivestockImpl;
import mvc.services.livestock.LivestockService;

@Service
public class LivestockManagerImpl implements LivestockManager {

	@Autowired
	private LivestockService livestockService;

	@Override
	public LivestockImpl findById(Integer livestockId) {
		return livestockService.findById(livestockId);
	}

	@Override
	public LivestockImpl findByName(String name) {
		return livestockService.findByName(name);
	}

	@Override
	public List<LivestockImpl> findLivestockByAquariumId(Integer aquariumId) {
		return livestockService.findLivestockByAquariumId(aquariumId);
	}

	@Override
	public boolean addLivestock(LivestockImpl livestock) {
		return livestockService.addLivestock(livestock);
	}

	@Override
	public LivestockImpl updateLivestock(LivestockImpl livestock) {
		return livestockService.updateLivestock(livestock);
	}

	@Override
	public boolean deleteLivestockById(Integer livestockId) {
		return livestockService.deleteLivestockById(livestockId);
	}

	@Override
	public List<LivestockImpl> findAllLivestock() {
		return livestockService.findAllLivestock();
	}

	@Override
	public boolean isLivestockExist(LivestockImpl livestock) {
		return livestockService.isLivestockExist(livestock);
	}

}