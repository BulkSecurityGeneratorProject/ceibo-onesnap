package cl.onesnap.angulartest.repository;

import cl.onesnap.angulartest.domain.AuthorityCUSTOM;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the AuthorityCUSTOM entity.
 * 
 * @author OneSnap
 */
public interface AuthorityCUSTOMRepository extends JpaRepository<AuthorityCUSTOM, String> {
}