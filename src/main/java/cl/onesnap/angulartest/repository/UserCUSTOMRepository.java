package cl.onesnap.angulartest.repository;

import cl.onesnap.angulartest.domain.UserCUSTOM;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the UserCUSTOM entity.
 * 
 * @author OneSnap
 */
public interface UserCUSTOMRepository extends JpaRepository<UserCUSTOM, Long> {
}