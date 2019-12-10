package mvc.dao.aquarium;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mvc.dao.AbstractDao;
import mvc.entity.aquarium.AquariumImpl;

@Repository
public class AquariumDaoImpl extends AbstractDao implements AquariumDao {

	private final static Logger logger = Logger.getLogger(AquariumDaoImpl.class.getName());

	@Override
	public boolean addAquarium(AquariumImpl aquarium) {
		try {
			persist(aquarium);
			logger.log(Level.INFO, "Add Aquarium Successful");
			return true;
		} catch (Exception e) {
			logger.log(Level.INFO, "Add Aquarium Failed");
			return false;
		}

	}

	@SuppressWarnings("unchecked")
	@Override
	public List<AquariumImpl> findAllAquariums() {
		Criteria criteria = getSession().createCriteria(AquariumImpl.class);
		return (List<AquariumImpl>) criteria.list();
	}

	@Override
	public AquariumImpl findById(Integer aquariumId) {
		Criteria criteria = getSession().createCriteria(AquariumImpl.class);
		criteria.add(Restrictions.eq("aquariumId", aquariumId));
		return (AquariumImpl) criteria.uniqueResult();
	}

	@Override
	public AquariumImpl findByName(String name) {
		Criteria criteria = getSession().createCriteria(AquariumImpl.class);
		criteria.add(Restrictions.eq("name", name));
		return (AquariumImpl) criteria.uniqueResult();
	}

	@Override
	public AquariumImpl updateAquarium(AquariumImpl aquarium) {
		getSession().update(aquarium);
		return aquarium;
	}

	@Override
	public boolean deleteAquariumById(Integer aquariumId) {
		try {
			Query query = getSession().createQuery("DELETE FROM AquariumImpl WHERE aquariumId = :aquariumId");
			query.setInteger("aquariumId", aquariumId);
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
