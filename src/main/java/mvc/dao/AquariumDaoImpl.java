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

	public void persist(Object entity) {
		getSession().persist(entity);
	}

	public void delete(Object entity) {
		getSession().delete(entity);
	}
	
	@Override
	public void addAquarium(Aquarium aquarium) {
		persist(aquarium);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Aquarium> findAllAquariums() {
		Criteria criteria = getSession().createCriteria(Aquarium.class);
		return (List<Aquarium>) criteria.list();
	}

	@Override
	public Aquarium findById(Long id) {
		Criteria criteria = getSession().createCriteria(Aquarium.class);
		criteria.add(Restrictions.eq("id", id));
		return (Aquarium) criteria.list();
	}
	
	@Override
	public Aquarium findByName(String name) {
		Criteria criteria = getSession().createCriteria(Aquarium.class);
		criteria.add(Restrictions.eq("name", name));
		return (Aquarium) criteria.uniqueResult();
	}
	
	@Override
	public void updateAquarium(Aquarium aquarium) {
		getSession().update(aquarium);
	}

	@Override
	public void deleteAquariumById(Long id) {
		Query query = getSession().createQuery("DELETE FROM Aquarium WHERE id = :id");
		query.setLong("id", id);
		query.executeUpdate();
	}

	@Override
	public void deleteAllAquariums() {
		Query query = getSession().createQuery("DELETE FROM Aquarium");
		query.executeUpdate();
	}
}
