package mvc.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.model.AquariumImpl;

@Repository
public class AquariumDaoImpl implements AquariumDao {

	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	@Override
	public boolean addAquarium(AquariumImpl aquarium) {
		try {
			getSession().persist(aquarium);
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
	public AquariumImpl findById(Integer id) {
		Criteria criteria = getSession().createCriteria(AquariumImpl.class);
		criteria.add(Restrictions.eq("id", id));
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
	public boolean deleteAquariumById(Integer id) {
		try {
			Query query = getSession().createQuery("DELETE FROM AquariumImpl WHERE id = :id");
			query.setInteger("id", id);
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
