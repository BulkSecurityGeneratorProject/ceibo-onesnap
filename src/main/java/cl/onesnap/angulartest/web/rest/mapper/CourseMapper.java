package cl.onesnap.angulartest.web.rest.mapper;

import cl.onesnap.angulartest.domain.Course;
import cl.onesnap.angulartest.web.rest.dto.CourseDTO;


/**
 * Mapper Interface for the entity Course and its DTO CourseDTO.
 * 
 * @author OneSnap
 */
public interface CourseMapper {

    CourseDTO courseToCourseDTO(Course course);

    Course courseDTOToCourse(CourseDTO courseDTO);
}