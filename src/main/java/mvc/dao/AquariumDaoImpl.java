package mvc.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.model.Aquarium;

@Repository
public class AquariumDaoImpl implements AquariumDao {

	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	@Override
	public boolean addAquarium(Aquarium aquarium) {
		try {
			getSession().persist(aquarium);
			System.out.println("Add Aquarium Successful");
			return true;
		} 
		catch (Exception e) {
			System.out.println("Add Aquarium Failed");
			return false;
		}
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Aquarium> findAllAquariums() {
		Criteria criteria = getSession().createCriteria(Aquarium.class);
		return (List<Aquarium>) criteria.list();
	}

	@Override
	public Aquarium findById(Integer id) {
		Criteria criteria = getSession().createCriteria(Aquarium.class);
		criteria.add(Restrictions.eq("id", id));
		return (Aquarium) criteria.uniqueResult();
	}

	@Override
	public Aquarium findByName(String name) {
		Criteria criteria = getSession().createCriteria(Aquarium.class);
		criteria.add(Restrictions.eq("name", name));
		return (Aquarium) criteria.uniqueResult();
	}

	@Override
	public boolean updateAquarium(Aquarium aquarium) {
		;
		try {
			getSession().update(aquarium);
			System.out.println("DAO Update Successful");
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("DAO Update Failed");
			return false;
		}
	}

	@Override
	public boolean deleteAquariumById(Integer id) {
		try {
			Query query = getSession().createQuery("DELETE FROM Aquarium WHERE id = :id");
			query.setInteger("id", id);
			query.executeUpdate();
			System.out.println("DAO Delete Successful");
			return true;
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println("DAO Delete Failed");
			return false;
		}
	}

}