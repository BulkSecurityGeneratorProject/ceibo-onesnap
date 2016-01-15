package cl.onesnap.angulartest.web.rest.mapper;

import org.springframework.stereotype.Component;
import cl.onesnap.angulartest.domain.AuthorityCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.AuthorityCUSTOMDTO;


/**
 * Mapper for the entity AuthorityCUSTOM and its DTO AuthorityCUSTOMDTO.
 * 
 * @author OneSnap
 */
@Component
public class AuthorityCUSTOMMapperImpl implements AuthorityCUSTOMMapper {

    @Override
    public AuthorityCUSTOMDTO authorityCUSTOMToAuthorityCUSTOMDTO(AuthorityCUSTOM authorityCUSTOM) {
        if (authorityCUSTOM == null) {
            return null;
        }
        
        AuthorityCUSTOMDTO authorityCUSTOMDTO = new AuthorityCUSTOMDTO();
        
        authorityCUSTOMDTO.setName(authorityCUSTOM.getName());
        
        
        return authorityCUSTOMDTO;
    }

    @Override
    public AuthorityCUSTOM authorityCUSTOMDTOToAuthorityCUSTOM(AuthorityCUSTOMDTO authorityCUSTOMDTO) {
        if (authorityCUSTOMDTO == null) {
            return null;
        }
        
        AuthorityCUSTOM authorityCUSTOM = new AuthorityCUSTOM();
        
        authorityCUSTOM.setName(authorityCUSTOMDTO.getName());
        
        
        return authorityCUSTOM;
    }
}