package cl.onesnap.angulartest.repository;

import cl.onesnap.angulartest.domain.Student;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Student entity.
 * 
 * @author OneSnap
 */
public interface StudentRepository extends JpaRepository<Student, Long> {
}