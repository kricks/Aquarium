package mvc.services.livestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mvc.dao.livestock.LivestockDao;
import mvc.entity.livestock.LivestockImpl;

@Service
@Transactional
public class LivestockServiceImpl implements LivestockService {

	@Autowired
	private LivestockDao livestockDao;

	@Override
	public LivestockImpl findById(Integer livestockId) {
		return livestockDao.findById(livestockId);
	}

	@Override
	public LivestockImpl findByName(String name) {
		return livestockDao.findByName(name);
	}

	@Override
	public boolean addLivestock(LivestockImpl livestock) {
		return livestockDao.addLivestock(livestock);
	}

	@Override
	public LivestockImpl updateLivestock(LivestockImpl livestock) {
		return livestockDao.updateLivestock(livestock);
	}

	@Override
	public boolean deleteLivestockById(Integer livestockId) {
		return livestockDao.deleteLivestockById(livestockId);
	}

	@Override
	public List<LivestockImpl> findAllLivestock() {
		return livestockDao.findAllLivestock();
	}

	@Override
	public boolean isLivestockExist(LivestockImpl livestock) {
		return findByName(livestock.getName()) != null;
	}

	@Override
	public Integer findLivestockByAquariumId(Integer aquariumId) {
		return livestockDao.findLivestockByAquariumId(aquariumId);
	}

}
