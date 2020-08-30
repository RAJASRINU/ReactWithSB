package springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import springboot.dao.EmployeeDAO;
import springboot.modal.Employee;
import springboot.modal.User;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@Service
public class EmployeeServiceImp implements EmployeeService {

    @Autowired
    private EmployeeDAO employeeDao;

    @Transactional
    @Override
    public List<Employee> get() {
        return employeeDao.get();
    }

    @Transactional
    @Override
    public Employee get(int id) {
        return employeeDao.get(id);
    }


    @Override
    public boolean get(String name, String password) {
        return employeeDao.get(name, password);
    }


    @Transactional
    @Override
    public void save(Employee employee) {
        employeeDao.save(employee);

    }

    @Transactional
    @Override
    public void save(User user) {
        employeeDao.save(user);
    }


    @Transactional
    @Override
    public void delete(int id) {
        employeeDao.delete(id);

    }

}
