package springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "tb_employee")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;


    @Column
    private String firstName;


    @Column
    private String phoneNo;


    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private Date dob;

    @Column
    private String gender;

    @Override
    public String toString() {
        return "Employee [id=	" + id + ", name=" + firstName + " " + lastName + ", email=" + email + ", dob=" + dob + ", gender="
                + gender + "]";
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }


}
