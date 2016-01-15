package cl.onesnap.angulartest.service.crud;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cl.onesnap.angulartest.repository.CourseRepository;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.CourseMapper;
import cl.onesnap.angulartest.domain.Course;
import cl.onesnap.angulartest.web.rest.dto.CourseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * @author OneSnap
 */
@Service
@Transactional
public class CourseCRUDService {

    @Inject
    private CourseRepository courseRepository;

    @Inject
    private CourseMapper courseMapper;

    public Course createCourse(CourseDTO courseDTO) {
        // TODO: if dto.getId() != null raise CustomParameterizedException
        Course course = courseMapper.courseDTOToCourse(courseDTO);
        return courseRepository.save(course);
    }

    public Course updateCourse(CourseDTO courseDTO) {
        // TODO: if dto.getId() == null: create
        Course course = courseMapper.courseDTOToCourse(courseDTO);
        return courseRepository.save(course);
    }

    public Page<Course> getAllCourses(Pageable pageable) {
        return courseRepository.findAll(pageable);
    }

    public Course getCourse(Long id) {
        return courseRepository.findOne(id);
    }

    public void deleteCourse(Long id) {
        courseRepository.delete(id);
    }
}