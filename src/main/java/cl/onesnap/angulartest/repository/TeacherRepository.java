package cl.onesnap.angulartest.repository;

import cl.onesnap.angulartest.domain.Teacher;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Teacher entity.
 * 
 * @author OneSnap
 */
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}