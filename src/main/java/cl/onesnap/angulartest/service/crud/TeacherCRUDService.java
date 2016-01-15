package cl.onesnap.angulartest.service.crud;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cl.onesnap.angulartest.repository.TeacherRepository;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.TeacherMapper;
import cl.onesnap.angulartest.domain.Teacher;
import cl.onesnap.angulartest.web.rest.dto.TeacherDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * @author OneSnap
 */
@Service
@Transactional
public class TeacherCRUDService {

    @Inject
    private TeacherRepository teacherRepository;

    @Inject
    private TeacherMapper teacherMapper;

    public Teacher createTeacher(TeacherDTO teacherDTO) {
        // TODO: if dto.getId() != null raise CustomParameterizedException
        Teacher teacher = teacherMapper.teacherDTOToTeacher(teacherDTO);
        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(TeacherDTO teacherDTO) {
        // TODO: if dto.getId() == null: create
        Teacher teacher = teacherMapper.teacherDTOToTeacher(teacherDTO);
        return teacherRepository.save(teacher);
    }

    public Page<Teacher> getAllTeachers(Pageable pageable) {
        return teacherRepository.findAll(pageable);
    }

    public Teacher getTeacher(Long id) {
        return teacherRepository.findOne(id);
    }

    public void deleteTeacher(Long id) {
        teacherRepository.delete(id);
    }
}