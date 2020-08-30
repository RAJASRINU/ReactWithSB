package springboot.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import springboot.modal.Employee;
import springboot.modal.User;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class EmployeeDAOImp implements EmployeeDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Employee> get() {

        Session currSession = entityManager.unwrap(Session.class);
        Query<Employee> query = currSession.createQuery("from Employee", Employee.class);
        List<Employee> list = query.getResultList();
        return list;

    }

    @Override
    public Employee get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Employee emp = currSession.get(Employee.class, id);
        return emp;
    }


    @Override
    public boolean get(String name, String password) {
        Session currSession = entityManager.unwrap(Session.class);
        Query query = currSession.createNamedQuery("findUser", User.class);
        query.setParameter("name", name);
        query.setParameter("password", password);
        User user = null;
        try {
            user = (User) query.getSingleResult();
        } catch (Exception e) {
            return false;
        }
        return user == null ? false : true;
    }


    @Override
    public void save(Employee employee) {

        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(employee);

    }

    @Override
    public void save(User user) {

        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(user);

    }


    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Employee emp = currSession.get(Employee.class, id);
        currSession.delete(emp);

    }


}
