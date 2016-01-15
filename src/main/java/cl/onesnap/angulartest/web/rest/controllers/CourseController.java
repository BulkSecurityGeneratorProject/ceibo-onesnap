package cl.onesnap.angulartest.web.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cl.onesnap.angulartest.service.crud.CourseCRUDService;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.CourseMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import com.codahale.metrics.annotation.Timed;
import cl.onesnap.angulartest.web.rest.util.HeaderUtil;
import cl.onesnap.angulartest.domain.Course;
import cl.onesnap.angulartest.web.rest.dto.CourseDTO;
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
 * REST controller for managing Course.
 * 
 * @author OneSnap
 */
@RestController
@RequestMapping("/api")
public class CourseController extends ApiBaseController {

    private final Logger log = LoggerFactory.getLogger(CourseController.class);

    @Inject
    private CourseCRUDService courseCRUDService;

    @Inject
    private CourseMapper courseMapper;

    /**
     * POST  /course -> Create a new Course.
     */
    @RequestMapping(value = "/course", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<CourseDTO> createCourse(@Valid @RequestBody CourseDTO courseDTO) throws URISyntaxException {
        log.debug("REST request to save Course : {}", courseDTO);
        Course result = courseCRUDService.createCourse(courseDTO);;
        return ResponseEntity.created(new URI("/api/course/" + result.getId()))
                 .headers(HeaderUtil.createEntityCreationAlert("course", result.getId().toString()))
                 .body(courseMapper.courseToCourseDTO(result));
    }

    /**
     * PUT  /course -> Updates an existing Course.
     */
    @RequestMapping(value = "/course", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<CourseDTO> updateCourse(@Valid @RequestBody CourseDTO courseDTO) throws URISyntaxException {
        log.debug("REST request to update Course : {}", courseDTO);
        Course result = courseCRUDService.updateCourse(courseDTO);;
        return ResponseEntity.ok()
                 .headers(HeaderUtil.createEntityUpdateAlert("course", result.getId().toString()))
                 .body(courseMapper.courseToCourseDTO(result));
    }

    /**
     * GET  /course -> get all the Course.
     */
    @RequestMapping(value = "/course", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<CourseDTO>> getAllCourses(Pageable pageable) throws URISyntaxException {
        Page<Course> page = courseCRUDService.getAllCourses(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/course");
        return new ResponseEntity<>(page.getContent().stream()
                .map(courseMapper::courseToCourseDTO)
                .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /course/:id -> get the "id" Course.
     */
    @RequestMapping(value = "/course/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<CourseDTO> getCourse(@PathVariable Long id) {
        log.debug("REST request to get Course : {}", id);;
        return Optional.ofNullable(courseCRUDService.getCourse(id))
            .map(courseMapper::courseToCourseDTO)
            .map(courseDTO -> new ResponseEntity<>(
                courseDTO,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /course/:id -> delete the "id" Course.
     */
    @RequestMapping(value = "/course/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseCRUDService.deleteCourse(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("course", id.toString())).build();
    }
}