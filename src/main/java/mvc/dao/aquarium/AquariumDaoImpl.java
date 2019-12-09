package mvc.dao.aquarium;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mvc.dao.AbstractDao;
import mvc.model.aquarium.AquariumImpl;

@Repository
public class AquariumDaoImpl extends AbstractDao implements AquariumDao {

	@Override
	public boolean addAquarium(AquariumImpl aquarium) {
		try {
			persist(aquarium);
			System.out.println("Add Aquarium Successful");
			return true;
		} catch (Exception e) {
			System.out.println("Add Aquarium Failed");
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
			System.out.println("DAO Delete Successful");
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("DAO Delete Failed");
			return false;
		}
	}

}
