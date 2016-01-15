package cl.onesnap.angulartest.service.crud;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cl.onesnap.angulartest.repository.StudentRepository;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.StudentMapper;
import cl.onesnap.angulartest.domain.Student;
import cl.onesnap.angulartest.web.rest.dto.StudentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * @author OneSnap
 */
@Service
@Transactional
public class StudentCRUDService {

    @Inject
    private StudentRepository studentRepository;

    @Inject
    private StudentMapper studentMapper;

    public Student createStudent(StudentDTO studentDTO) {
        // TODO: if dto.getId() != null raise CustomParameterizedException
        Student student = studentMapper.studentDTOToStudent(studentDTO);
        return studentRepository.save(student);
    }

    public Student updateStudent(StudentDTO studentDTO) {
        // TODO: if dto.getId() == null: create
        Student student = studentMapper.studentDTOToStudent(studentDTO);
        return studentRepository.save(student);
    }

    public Page<Student> getAllStudents(Pageable pageable) {
        return studentRepository.findAll(pageable);
    }

    public Student getStudent(Long id) {
        return studentRepository.findOne(id);
    }

    public void deleteStudent(Long id) {
        studentRepository.delete(id);
    }
}