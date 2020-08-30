package springboot.service;


import springboot.modal.Employee;
import springboot.modal.User;

import java.util.List;

public interface EmployeeService {


    List<Employee> get();

    Employee get(int id);


    boolean get(String name, String password);

    void save(Employee employee);

    void save(User user);

    void delete(int id);


}
