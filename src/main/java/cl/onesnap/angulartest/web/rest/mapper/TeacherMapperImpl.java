package cl.onesnap.angulartest.web.rest.mapper;

import org.springframework.stereotype.Component;
import cl.onesnap.angulartest.domain.Teacher;
import cl.onesnap.angulartest.web.rest.dto.TeacherDTO;


/**
 * Mapper for the entity Teacher and its DTO TeacherDTO.
 * 
 * @author OneSnap
 */
@Component
public class TeacherMapperImpl implements TeacherMapper {

    @Override
    public TeacherDTO teacherToTeacherDTO(Teacher teacher) {
        if (teacher == null) {
            return null;
        }
        
        TeacherDTO teacherDTO = new TeacherDTO();
        
        teacherDTO.setId(teacher.getId());
        
        teacherDTO.setFirstName(teacher.getFirstName());
        teacherDTO.setLastName(teacher.getLastName());
        
        return teacherDTO;
    }

    @Override
    public Teacher teacherDTOToTeacher(TeacherDTO teacherDTO) {
        if (teacherDTO == null) {
            return null;
        }
        
        Teacher teacher = new Teacher();
        
        teacher.setId(teacherDTO.getId());
        
        teacher.setFirstName(teacherDTO.getFirstName());
        teacher.setLastName(teacherDTO.getLastName());
        
        return teacher;
    }
}