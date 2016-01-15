package cl.onesnap.angulartest.web.rest.mapper;

import cl.onesnap.angulartest.domain.Teacher;
import cl.onesnap.angulartest.web.rest.dto.TeacherDTO;


/**
 * Mapper Interface for the entity Teacher and its DTO TeacherDTO.
 * 
 * @author OneSnap
 */
public interface TeacherMapper {

    TeacherDTO teacherToTeacherDTO(Teacher teacher);

    Teacher teacherDTOToTeacher(TeacherDTO teacherDTO);
}