package cl.onesnap.angulartest.web.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cl.onesnap.angulartest.service.crud.AuthorityCUSTOMCRUDService;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.AuthorityCUSTOMMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import com.codahale.metrics.annotation.Timed;
import cl.onesnap.angulartest.web.rest.util.HeaderUtil;
import cl.onesnap.angulartest.domain.AuthorityCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.AuthorityCUSTOMDTO;
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
 * REST controller for managing AuthorityCUSTOM.
 * 
 * @author OneSnap
 */
@RestController
@RequestMapping("/api")
public class AuthorityCUSTOMController extends ApiBaseController {

    private final Logger log = LoggerFactory.getLogger(AuthorityCUSTOMController.class);

    @Inject
    private AuthorityCUSTOMCRUDService authorityCUSTOMCRUDService;

    @Inject
    private AuthorityCUSTOMMapper authorityCUSTOMMapper;

    /**
     * POST  /authoritycustom -> Create a new AuthorityCUSTOM.
     */
    @RequestMapping(value = "/authoritycustom", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<AuthorityCUSTOMDTO> createAuthorityCUSTOM(@Valid @RequestBody AuthorityCUSTOMDTO authorityCUSTOMDTO) throws URISyntaxException {
        log.debug("REST request to save AuthorityCUSTOM : {}", authorityCUSTOMDTO);
        AuthorityCUSTOM result = authorityCUSTOMCRUDService.createAuthorityCUSTOM(authorityCUSTOMDTO);;
        return ResponseEntity.created(new URI("/api/authoritycustom/" + result.getName()))
                 .headers(HeaderUtil.createEntityCreationAlert("authorityCUSTOM", result.getName()))
                 .body(authorityCUSTOMMapper.authorityCUSTOMToAuthorityCUSTOMDTO(result));
    }

    /**
     * PUT  /authoritycustom -> Updates an existing AuthorityCUSTOM.
     */
    @RequestMapping(value = "/authoritycustom", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<AuthorityCUSTOMDTO> updateAuthorityCUSTOM(@Valid @RequestBody AuthorityCUSTOMDTO authorityCUSTOMDTO) throws URISyntaxException {
        log.debug("REST request to update AuthorityCUSTOM : {}", authorityCUSTOMDTO);
        AuthorityCUSTOM result = authorityCUSTOMCRUDService.updateAuthorityCUSTOM(authorityCUSTOMDTO);;
        return ResponseEntity.ok()
                 .headers(HeaderUtil.createEntityUpdateAlert("authorityCUSTOM", result.getName()))
                 .body(authorityCUSTOMMapper.authorityCUSTOMToAuthorityCUSTOMDTO(result));
    }

    /**
     * GET  /authoritycustom -> get all the AuthorityCUSTOM.
     */
    @RequestMapping(value = "/authoritycustom", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<AuthorityCUSTOMDTO>> getAllAuthorityCUSTOMs(Pageable pageable) throws URISyntaxException {
        Page<AuthorityCUSTOM> page = authorityCUSTOMCRUDService.getAllAuthorityCUSTOMs(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/authoritycustom");
        return new ResponseEntity<>(page.getContent().stream()
                .map(authorityCUSTOMMapper::authorityCUSTOMToAuthorityCUSTOMDTO)
                .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /authoritycustom/:name -> get the "name" AuthorityCUSTOM.
     */
    @RequestMapping(value = "/authoritycustom/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<AuthorityCUSTOMDTO> getAuthorityCUSTOM(@PathVariable String name) {
        log.debug("REST request to get AuthorityCUSTOM : {}", name);;
        return Optional.ofNullable(authorityCUSTOMCRUDService.getAuthorityCUSTOM(name))
            .map(authorityCUSTOMMapper::authorityCUSTOMToAuthorityCUSTOMDTO)
            .map(authorityCUSTOMDTO -> new ResponseEntity<>(
                authorityCUSTOMDTO,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /authoritycustom/:name -> delete the "name" AuthorityCUSTOM.
     */
    @RequestMapping(value = "/authoritycustom/{name}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteAuthorityCUSTOM(@PathVariable String name) {
        authorityCUSTOMCRUDService.deleteAuthorityCUSTOM(name);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("authorityCUSTOM", name)).build();
    }
}