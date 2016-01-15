package cl.onesnap.angulartest.web.rest.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Id;


/**
 * A DTO for the AuthorityCUSTOM entity.
 * 
 * @author OneSnap
 */
public class AuthorityCUSTOMDTO implements Serializable {

    @Id
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        
        AuthorityCUSTOMDTO authorityCUSTOMDTO = (AuthorityCUSTOMDTO) o;
        
        if (! Objects.equals(name, authorityCUSTOMDTO.name)) {
            return false;
        }
        
        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name);
    }

    @Override
    public String toString() {
        return "AuthorityCUSTOMDTO{" + "name=" + name + "}";
    }
}