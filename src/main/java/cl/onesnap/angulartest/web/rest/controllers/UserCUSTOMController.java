package cl.onesnap.angulartest.web.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cl.onesnap.angulartest.service.crud.UserCUSTOMCRUDService;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.UserCUSTOMMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import com.codahale.metrics.annotation.Timed;
import cl.onesnap.angulartest.web.rest.util.HeaderUtil;
import cl.onesnap.angulartest.domain.UserCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.UserCUSTOMDTO;
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
 * REST controller for managing UserCUSTOM.
 * 
 * @author OneSnap
 */
@RestController
@RequestMapping("/api")
public class UserCUSTOMController extends ApiBaseController {

    private final Logger log = LoggerFactory.getLogger(UserCUSTOMController.class);

    @Inject
    private UserCUSTOMCRUDService userCUSTOMCRUDService;

    @Inject
    private UserCUSTOMMapper userCUSTOMMapper;

    /**
     * POST  /usercustom -> Create a new UserCUSTOM.
     */
    @RequestMapping(value = "/usercustom", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<UserCUSTOMDTO> createUserCUSTOM(@Valid @RequestBody UserCUSTOMDTO userCUSTOMDTO) throws URISyntaxException {
        log.debug("REST request to save UserCUSTOM : {}", userCUSTOMDTO);
        UserCUSTOM result = userCUSTOMCRUDService.createUserCUSTOM(userCUSTOMDTO);;
        return ResponseEntity.created(new URI("/api/usercustom/" + result.getId()))
                 .headers(HeaderUtil.createEntityCreationAlert("userCUSTOM", result.getId().toString()))
                 .body(userCUSTOMMapper.userCUSTOMToUserCUSTOMDTO(result));
    }

    /**
     * PUT  /usercustom -> Updates an existing UserCUSTOM.
     */
    @RequestMapping(value = "/usercustom", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<UserCUSTOMDTO> updateUserCUSTOM(@Valid @RequestBody UserCUSTOMDTO userCUSTOMDTO) throws URISyntaxException {
        log.debug("REST request to update UserCUSTOM : {}", userCUSTOMDTO);
        UserCUSTOM result = userCUSTOMCRUDService.updateUserCUSTOM(userCUSTOMDTO);;
        return ResponseEntity.ok()
                 .headers(HeaderUtil.createEntityUpdateAlert("userCUSTOM", result.getId().toString()))
                 .body(userCUSTOMMapper.userCUSTOMToUserCUSTOMDTO(result));
    }

    /**
     * GET  /usercustom -> get all the UserCUSTOM.
     */
    @RequestMapping(value = "/usercustom", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<UserCUSTOMDTO>> getAllUserCUSTOMs(Pageable pageable) throws URISyntaxException {
        Page<UserCUSTOM> page = userCUSTOMCRUDService.getAllUserCUSTOMs(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/usercustom");
        return new ResponseEntity<>(page.getContent().stream()
                .map(userCUSTOMMapper::userCUSTOMToUserCUSTOMDTO)
                .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /usercustom/:id -> get the "id" UserCUSTOM.
     */
    @RequestMapping(value = "/usercustom/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<UserCUSTOMDTO> getUserCUSTOM(@PathVariable Long id) {
        log.debug("REST request to get UserCUSTOM : {}", id);;
        return Optional.ofNullable(userCUSTOMCRUDService.getUserCUSTOM(id))
            .map(userCUSTOMMapper::userCUSTOMToUserCUSTOMDTO)
            .map(userCUSTOMDTO -> new ResponseEntity<>(
                userCUSTOMDTO,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /usercustom/:id -> delete the "id" UserCUSTOM.
     */
    @RequestMapping(value = "/usercustom/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteUserCUSTOM(@PathVariable Long id) {
        userCUSTOMCRUDService.deleteUserCUSTOM(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("userCUSTOM", id.toString())).build();
    }
}