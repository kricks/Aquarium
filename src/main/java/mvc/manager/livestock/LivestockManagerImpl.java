package mvc.manager.livestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import mvc.entity.livestock.LivestockImpl;
import mvc.services.livestock.LivestockService;

@Service
public class LivestockManagerImpl implements LivestockManager {

	@Autowired
	private LivestockService livestockService;

	@Override
	public ResponseEntity<LivestockImpl> findById(Integer livestockId) {
		return livestockService.findById(livestockId);
	}

	@Override
	public List<LivestockImpl> findAllLivestock() {
		return livestockService.findAllLivestock();
	}

	@Override
	public List<LivestockImpl> findLivestockByFkAquariumId(Integer fkAquariumId) {
		System.out.println("helloo from manager: " + fkAquariumId);
		return livestockService.findLivestockByFkAquariumId(fkAquariumId);
	}

	@Override
	public LivestockImpl addLivestock(LivestockImpl livestock) {
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
	public boolean isLivestockExist(LivestockImpl livestock) {
		return livestockService.isLivestockExist(livestock);
	}

}
