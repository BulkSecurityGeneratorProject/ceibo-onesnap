package cl.onesnap.angulartest.service.crud;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cl.onesnap.angulartest.repository.AuthorityCUSTOMRepository;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.AuthorityCUSTOMMapper;
import cl.onesnap.angulartest.domain.AuthorityCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.AuthorityCUSTOMDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * @author OneSnap
 */
@Service
@Transactional
public class AuthorityCUSTOMCRUDService {

    @Inject
    private AuthorityCUSTOMRepository authorityCUSTOMRepository;

    @Inject
    private AuthorityCUSTOMMapper authorityCUSTOMMapper;

    public AuthorityCUSTOM createAuthorityCUSTOM(AuthorityCUSTOMDTO authorityCUSTOMDTO) {
        // TODO: if dto.getId() != null raise CustomParameterizedException
        AuthorityCUSTOM authorityCUSTOM = authorityCUSTOMMapper.authorityCUSTOMDTOToAuthorityCUSTOM(authorityCUSTOMDTO);
        return authorityCUSTOMRepository.save(authorityCUSTOM);
    }

    public AuthorityCUSTOM updateAuthorityCUSTOM(AuthorityCUSTOMDTO authorityCUSTOMDTO) {
        // TODO: if dto.getId() == null: create
        AuthorityCUSTOM authorityCUSTOM = authorityCUSTOMMapper.authorityCUSTOMDTOToAuthorityCUSTOM(authorityCUSTOMDTO);
        return authorityCUSTOMRepository.save(authorityCUSTOM);
    }

    public Page<AuthorityCUSTOM> getAllAuthorityCUSTOMs(Pageable pageable) {
        return authorityCUSTOMRepository.findAll(pageable);
    }

    public AuthorityCUSTOM getAuthorityCUSTOM(String name) {
        return authorityCUSTOMRepository.findOne(name);
    }

    public void deleteAuthorityCUSTOM(String name) {
        authorityCUSTOMRepository.delete(name);
    }
}