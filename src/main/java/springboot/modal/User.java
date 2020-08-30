package springboot.modal;

import javax.persistence.*;

@Entity
@NamedQuery(name = "findUser",
        query = "SELECT u FROM User u WHERE u.name=:name and u.password=:password"
)
@Table(name = "tb_user")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String name;

    @Column
    private String password;


    @Override
    public String toString() {
        return "Employee [id=	" + id + ", name=" + name + "]";
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
