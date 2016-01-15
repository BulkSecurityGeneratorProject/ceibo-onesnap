package cl.onesnap.angulartest.web.rest.mapper;

import cl.onesnap.angulartest.domain.Student;
import cl.onesnap.angulartest.web.rest.dto.StudentDTO;


/**
 * Mapper Interface for the entity Student and its DTO StudentDTO.
 * 
 * @author OneSnap
 */
public interface StudentMapper {

    StudentDTO studentToStudentDTO(Student student);

    Student studentDTOToStudent(StudentDTO studentDTO);
}