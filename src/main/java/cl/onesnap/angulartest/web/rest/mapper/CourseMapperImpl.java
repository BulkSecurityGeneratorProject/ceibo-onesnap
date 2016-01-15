package cl.onesnap.angulartest.web.rest.mapper;

import org.springframework.stereotype.Component;
import cl.onesnap.angulartest.domain.Course;
import cl.onesnap.angulartest.web.rest.dto.CourseDTO;
import cl.onesnap.angulartest.domain.Teacher;
import cl.onesnap.angulartest.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Set;
import cl.onesnap.angulartest.web.rest.dto.StudentDTO;
import java.util.HashSet;


/**
 * Mapper for the entity Course and its DTO CourseDTO.
 * 
 * @author OneSnap
 */
@Component
public class CourseMapperImpl implements CourseMapper {

    @Autowired
    private StudentMapper studentMapper;

    @Override
    public CourseDTO courseToCourseDTO(Course course) {
        if (course == null) {
            return null;
        }
        
        CourseDTO courseDTO = new CourseDTO();
        
        courseDTO.setId(course.getId());
        
        courseDTO.setName(course.getName());
        courseDTO.setTeacherId(courseTeacherId(course));
        courseDTO.setStudents(studentSetToStudentDTOSet(course.getStudents()));
        
        return courseDTO;
    }

    @Override
    public Course courseDTOToCourse(CourseDTO courseDTO) {
        if (courseDTO == null) {
            return null;
        }
        
        Course course = new Course();
        
        course.setId(courseDTO.getId());
        
        course.setName(courseDTO.getName());
        course.setTeacher(teacherFromId(courseDTO.getTeacherId()));
        course.setStudents(studentDTOSetToStudentSet(courseDTO.getStudents()));
        
        return course;
    }

    private Long courseTeacherId(Course course) {
        if (course == null) {
            return null;
        }
        Teacher teacher = course.getTeacher();
        if (teacher == null) {
            return null;
        }
        Long id = teacher.getId();
        if (id == null) {
            return null;
        }
        return id;
    }

    public Teacher teacherFromId(Long id) {
        if (id == null) {
            return null;
        }
        Teacher teacher = new Teacher();
        teacher.setId(id);
        return teacher;
    }

    private Set<StudentDTO> studentSetToStudentDTOSet(Set<Student> set) {
        if (set == null) {
            return null;
        }
        Set<StudentDTO> set_ = new HashSet<StudentDTO>();
        for (Student student : set) {
            set_.add(studentMapper.studentToStudentDTO(student));
        }
        return set_;
    }

    private Set<Student> studentDTOSetToStudentSet(Set<StudentDTO> set) {
        if (set == null) {
            return null;
        }
        Set<Student> set_ = new HashSet<Student>();
        for (StudentDTO studentDTO : set) {
            set_.add(studentMapper.studentDTOToStudent(studentDTO));
        }
        return set_;
    }
}