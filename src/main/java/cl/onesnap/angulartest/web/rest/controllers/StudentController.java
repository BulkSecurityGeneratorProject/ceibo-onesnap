package cl.onesnap.angulartest.web.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cl.onesnap.angulartest.service.crud.StudentCRUDService;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.StudentMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import com.codahale.metrics.annotation.Timed;
import cl.onesnap.angulartest.web.rest.util.HeaderUtil;
import cl.onesnap.angulartest.domain.Student;
import cl.onesnap.angulartest.web.rest.dto.StudentDTO;
import java.net.URISyntaxException;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import cl.onesnap.angulartest.web.rest.util.PaginationUtil;
import java.util.stream.Collectors;
import java.util.LinkedList;
import java.util.Optional;


/**
 * REST controller for managing Student.
 * 
 * @author OneSnap
 */
@RestController
@RequestMapping("/api")
public class StudentController extends ApiBaseController {

    private final Logger log = LoggerFactory.getLogger(StudentController.class);

    @Inject
    private StudentCRUDService studentCRUDService;

    @Inject
    private StudentMapper studentMapper;

    /**
     * POST  /student -> Create a new Student.
     */
    @RequestMapping(value = "/student", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<StudentDTO> createStudent(@Valid @RequestBody StudentDTO studentDTO) throws URISyntaxException {
        log.debug("REST request to save Student : {}", studentDTO);
        Student result = studentCRUDService.createStudent(studentDTO);;
        return ResponseEntity.created(new URI("/api/student/" + result.getId()))
                 .headers(HeaderUtil.createEntityCreationAlert("student", result.getId().toString()))
                 .body(studentMapper.studentToStudentDTO(result));
    }

    /**
     * PUT  /student -> Updates an existing Student.
     */
    @RequestMapping(value = "/student", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<StudentDTO> updateStudent(@Valid @RequestBody StudentDTO studentDTO) throws URISyntaxException {
        log.debug("REST request to update Student : {}", studentDTO);
        Student result = studentCRUDService.updateStudent(studentDTO);;
        return ResponseEntity.ok()
                 .headers(HeaderUtil.createEntityUpdateAlert("student", result.getId().toString()))
                 .body(studentMapper.studentToStudentDTO(result));
    }

    /**
     * GET  /student -> get all the Student.
     */
    @RequestMapping(value = "/student", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<StudentDTO>> getAllStudents(Pageable pageable) throws URISyntaxException {
        Page<Student> page = studentCRUDService.getAllStudents(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/student");
        return new ResponseEntity<>(page.getContent().stream()
                .map(studentMapper::studentToStudentDTO)
                .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /student/:id -> get the "id" Student.
     */
    @RequestMapping(value = "/student/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<StudentDTO> getStudent(@PathVariable Long id) {
        log.debug("REST request to get Student : {}", id);;
        return Optional.ofNullable(studentCRUDService.getStudent(id))
            .map(studentMapper::studentToStudentDTO)
            .map(studentDTO -> new ResponseEntity<>(
                studentDTO,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /student/:id -> delete the "id" Student.
     */
    @RequestMapping(value = "/student/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        studentCRUDService.deleteStudent(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("student", id.toString())).build();
    }
}