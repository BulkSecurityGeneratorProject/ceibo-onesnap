package cl.onesnap.angulartest.web.rest.mapper;

import org.springframework.stereotype.Component;
import cl.onesnap.angulartest.domain.Student;
import cl.onesnap.angulartest.web.rest.dto.StudentDTO;


/**
 * Mapper for the entity Student and its DTO StudentDTO.
 * 
 * @author OneSnap
 */
@Component
public class StudentMapperImpl implements StudentMapper {

    @Override
    public StudentDTO studentToStudentDTO(Student student) {
        if (student == null) {
            return null;
        }
        
        StudentDTO studentDTO = new StudentDTO();
        
        studentDTO.setId(student.getId());
        
        studentDTO.setFirstName(student.getFirstName());
        studentDTO.setLastName(student.getLastName());
        
        return studentDTO;
    }

    @Override
    public Student studentDTOToStudent(StudentDTO studentDTO) {
        if (studentDTO == null) {
            return null;
        }
        
        Student student = new Student();
        
        student.setId(studentDTO.getId());
        
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());
        
        return student;
    }
}