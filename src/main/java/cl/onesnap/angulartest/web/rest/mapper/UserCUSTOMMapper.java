package cl.onesnap.angulartest.web.rest.mapper;

import cl.onesnap.angulartest.domain.UserCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.UserCUSTOMDTO;


/**
 * Mapper Interface for the entity UserCUSTOM and its DTO UserCUSTOMDTO.
 * 
 * @author OneSnap
 */
public interface UserCUSTOMMapper {

    UserCUSTOMDTO userCUSTOMToUserCUSTOMDTO(UserCUSTOM userCUSTOM);

    UserCUSTOM userCUSTOMDTOToUserCUSTOM(UserCUSTOMDTO userCUSTOMDTO);
}