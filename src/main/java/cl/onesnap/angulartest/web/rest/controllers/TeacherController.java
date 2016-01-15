package cl.onesnap.angulartest.web.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cl.onesnap.angulartest.service.crud.TeacherCRUDService;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.TeacherMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import com.codahale.metrics.annotation.Timed;
import cl.onesnap.angulartest.web.rest.util.HeaderUtil;
import cl.onesnap.angulartest.domain.Teacher;
import cl.onesnap.angulartest.web.rest.dto.TeacherDTO;
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
 * REST controller for managing Teacher.
 * 
 * @author OneSnap
 */
@RestController
@RequestMapping("/api")
public class TeacherController extends ApiBaseController {

    private final Logger log = LoggerFactory.getLogger(TeacherController.class);

    @Inject
    private TeacherCRUDService teacherCRUDService;

    @Inject
    private TeacherMapper teacherMapper;

    /**
     * POST  /teacher -> Create a new Teacher.
     */
    @RequestMapping(value = "/teacher", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<TeacherDTO> createTeacher(@Valid @RequestBody TeacherDTO teacherDTO) throws URISyntaxException {
        log.debug("REST request to save Teacher : {}", teacherDTO);
        Teacher result = teacherCRUDService.createTeacher(teacherDTO);;
        return ResponseEntity.created(new URI("/api/teacher/" + result.getId()))
                 .headers(HeaderUtil.createEntityCreationAlert("teacher", result.getId().toString()))
                 .body(teacherMapper.teacherToTeacherDTO(result));
    }

    /**
     * PUT  /teacher -> Updates an existing Teacher.
     */
    @RequestMapping(value = "/teacher", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<TeacherDTO> updateTeacher(@Valid @RequestBody TeacherDTO teacherDTO) throws URISyntaxException {
        log.debug("REST request to update Teacher : {}", teacherDTO);
        Teacher result = teacherCRUDService.updateTeacher(teacherDTO);;
        return ResponseEntity.ok()
                 .headers(HeaderUtil.createEntityUpdateAlert("teacher", result.getId().toString()))
                 .body(teacherMapper.teacherToTeacherDTO(result));
    }

    /**
     * GET  /teacher -> get all the Teacher.
     */
    @RequestMapping(value = "/teacher", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<TeacherDTO>> getAllTeachers(Pageable pageable) throws URISyntaxException {
        Page<Teacher> page = teacherCRUDService.getAllTeachers(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/teacher");
        return new ResponseEntity<>(page.getContent().stream()
                .map(teacherMapper::teacherToTeacherDTO)
                .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /teacher/:id -> get the "id" Teacher.
     */
    @RequestMapping(value = "/teacher/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<TeacherDTO> getTeacher(@PathVariable Long id) {
        log.debug("REST request to get Teacher : {}", id);;
        return Optional.ofNullable(teacherCRUDService.getTeacher(id))
            .map(teacherMapper::teacherToTeacherDTO)
            .map(teacherDTO -> new ResponseEntity<>(
                teacherDTO,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /teacher/:id -> delete the "id" Teacher.
     */
    @RequestMapping(value = "/teacher/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        teacherCRUDService.deleteTeacher(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("teacher", id.toString())).build();
    }
}