package cl.onesnap.angulartest.domain;

import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.Column;
import java.util.Objects;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;


/**
 * A AuthorityCUSTOM
 * 
 * @author OneSnap
 */
@Entity
@Table(name = "authority_custom")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AuthorityCUSTOM {

    @Id
    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        AuthorityCUSTOM authorityCUSTOM = (AuthorityCUSTOM) o;
        return Objects.equals(name, authorityCUSTOM.name);
    }

    @Override
    public String toString() {
        return "AuthorityCUSTOM{" + "id=" + name + "}";
    }
}