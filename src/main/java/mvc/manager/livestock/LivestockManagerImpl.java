package mvc.manager.livestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mvc.entity.livestock.LivestockView;
import mvc.services.livestock.LivestockService;

@Service
public class LivestockManagerImpl implements LivestockManager {

	@Autowired
	private LivestockService livestockService;

	@Override
	public LivestockView findById(Integer livestockId) {
		return livestockService.findById(livestockId);
	}

	@Override
	public List<LivestockView> findAllLivestock() {
		return livestockService.findAllLivestock();
	}

	@Override
	public List<LivestockView> findLivestockByFkAquariumId(Integer fkAquariumId) {
		return livestockService.findLivestockByFkAquariumId(fkAquariumId);
	}

	@Override
	public LivestockView addLivestock(LivestockView livestock) {
		return livestockService.addLivestock(livestock);
	}

	@Override
	public LivestockView updateLivestock(LivestockView livestock) {
		return livestockService.updateLivestock(livestock);
	}

	@Override
	public boolean deleteLivestockById(Integer livestockId) {
		return livestockService.deleteLivestockById(livestockId);
	}
}
