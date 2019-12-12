package mvc.dao.livestock;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mvc.dao.AbstractDao;
import mvc.entity.livestock.LivestockImpl;

@Repository
public class LivestockDaoImpl extends AbstractDao implements LivestockDao {

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
			System.out.println("Add livestock Successful");
			return true;
		} catch (Exception e) {
			System.out.println("Add livestock Failed");
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
	public List<LivestockImpl> findLivestockByAquariumId(Integer aquariumId) {
		Criteria criteria = getSession().createCriteria(LivestockImpl.class);
		criteria.add(Restrictions.eq("aquariumId", aquariumId));
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
			System.out.println("DAO Delete Successful");
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("DAO Delete Failed");
			return false;
		}
	}

}
