package cl.onesnap.angulartest.web.rest.mapper;

import cl.onesnap.angulartest.domain.AuthorityCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.AuthorityCUSTOMDTO;


/**
 * Mapper Interface for the entity AuthorityCUSTOM and its DTO AuthorityCUSTOMDTO.
 * 
 * @author OneSnap
 */
public interface AuthorityCUSTOMMapper {

    AuthorityCUSTOMDTO authorityCUSTOMToAuthorityCUSTOMDTO(AuthorityCUSTOM authorityCUSTOM);

    AuthorityCUSTOM authorityCUSTOMDTOToAuthorityCUSTOM(AuthorityCUSTOMDTO authorityCUSTOMDTO);
}