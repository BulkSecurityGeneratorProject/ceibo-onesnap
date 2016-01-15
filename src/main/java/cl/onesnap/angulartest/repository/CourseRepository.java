package cl.onesnap.angulartest.repository;

import cl.onesnap.angulartest.domain.Course;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Course entity.
 * 
 * @author OneSnap
 */
public interface CourseRepository extends JpaRepository<Course, Long> {
}