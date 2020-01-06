package mvc.dao.livestock;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mvc.dao.AbstractDao;
import mvc.dao.aquarium.AquariumDaoImpl;
import mvc.entity.livestock.LivestockImpl;

@Repository
public class LivestockDaoImpl extends AbstractDao implements LivestockDao {

	private final static Logger logger = Logger.getLogger(AquariumDaoImpl.class.getName());

	@Override
	public LivestockImpl findById(Integer livestockId) {
		Criteria criteria = getSession().createCriteria(LivestockImpl.class);
		criteria.add(Restrictions.eq("livestockId", livestockId));
		return (LivestockImpl) criteria.uniqueResult();
	}

	@Override
	public LivestockImpl findByName(String name) {
		Criteria criteria = getSession().createCriteria(LivestockImpl.class);
		criteria.add(Restrictions.eq("name", name));
		return (LivestockImpl) criteria.uniqueResult();
	}

	@Override
	public boolean addLivestock(LivestockImpl livestock) {
		try {
			persist(livestock);
			logger.log(Level.INFO, "Add livestock Successful");
			return true;
		} catch (Exception e) {
			logger.log(Level.INFO, "Add livestock Failed");
			return false;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<LivestockImpl> findAllLivestock() {
		Criteria criteria = getSession().createCriteria(LivestockImpl.class);
		return (List<LivestockImpl>) criteria.list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<LivestockImpl> findLivestockByFkAquariumId(Integer fkAquariumId) {
		Criteria criteria = getSession().createCriteria(LivestockImpl.class);
		criteria.add(Restrictions.eq("fkAquariumId", fkAquariumId));
		return (List<LivestockImpl>) criteria.list();
	}

	@Override
	public LivestockImpl updateLivestock(LivestockImpl livestock) {
		getSession().update(livestock);
		return livestock;
	}

	@Override
	public boolean deleteLivestockById(Integer livestockId) {
		try {
			Query query = getSession().createQuery("DELETE FROM LivestockImpl WHERE livestockId = :livestockId");
			query.setInteger("livestockId", livestockId);
			query.executeUpdate();
			logger.log(Level.INFO, "DAO Delete Successful");
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			logger.log(Level.INFO, "DAO Delete Failed");
			return false;
		}
	}

}
