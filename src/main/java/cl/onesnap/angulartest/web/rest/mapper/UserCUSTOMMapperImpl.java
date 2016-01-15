package cl.onesnap.angulartest.web.rest.mapper;

import org.springframework.stereotype.Component;
import cl.onesnap.angulartest.domain.UserCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.UserCUSTOMDTO;
import cl.onesnap.angulartest.domain.AuthorityCUSTOM;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Set;
import cl.onesnap.angulartest.web.rest.dto.AuthorityCUSTOMDTO;
import java.util.HashSet;


/**
 * Mapper for the entity UserCUSTOM and its DTO UserCUSTOMDTO.
 * 
 * @author OneSnap
 */
@Component
public class UserCUSTOMMapperImpl implements UserCUSTOMMapper {

    @Autowired
    private AuthorityCUSTOMMapper authorityCUSTOMMapper;

    @Override
    public UserCUSTOMDTO userCUSTOMToUserCUSTOMDTO(UserCUSTOM userCUSTOM) {
        if (userCUSTOM == null) {
            return null;
        }
        
        UserCUSTOMDTO userCUSTOMDTO = new UserCUSTOMDTO();
        
        userCUSTOMDTO.setId(userCUSTOM.getId());
        
        userCUSTOMDTO.setLogin(userCUSTOM.getLogin());
        userCUSTOMDTO.setPassword(userCUSTOM.getPassword());
        userCUSTOMDTO.setAuthorities(authorityCUSTOMSetToAuthorityCUSTOMDTOSet(userCUSTOM.getAuthorities()));
        userCUSTOMDTO.setActivated(userCUSTOM.isActivated());
        userCUSTOMDTO.setLangKey(userCUSTOM.getLangKey());
        userCUSTOMDTO.setEmail(userCUSTOM.getEmail());
        userCUSTOMDTO.setCreatedBy(userCUSTOM.getCreatedBy());
        userCUSTOMDTO.setCreatedDate(userCUSTOM.getCreatedDate());
        userCUSTOMDTO.setLastModifiedBy(userCUSTOM.getLastModifiedBy());
        userCUSTOMDTO.setLastModifiedDate(userCUSTOM.getLastModifiedDate());
        
        return userCUSTOMDTO;
    }

    @Override
    public UserCUSTOM userCUSTOMDTOToUserCUSTOM(UserCUSTOMDTO userCUSTOMDTO) {
        if (userCUSTOMDTO == null) {
            return null;
        }
        
        UserCUSTOM userCUSTOM = new UserCUSTOM();
        
        userCUSTOM.setId(userCUSTOMDTO.getId());
        
        userCUSTOM.setLogin(userCUSTOMDTO.getLogin());
        userCUSTOM.setPassword(userCUSTOMDTO.getPassword());
        userCUSTOM.setAuthorities(authorityCUSTOMDTOSetToAuthorityCUSTOMSet(userCUSTOMDTO.getAuthorities()));
        userCUSTOM.setActivated(userCUSTOMDTO.getActivated());
        userCUSTOM.setLangKey(userCUSTOMDTO.getLangKey());
        userCUSTOM.setEmail(userCUSTOMDTO.getEmail());
        
        return userCUSTOM;
    }

    private Set<AuthorityCUSTOMDTO> authorityCUSTOMSetToAuthorityCUSTOMDTOSet(Set<AuthorityCUSTOM> set) {
        if (set == null) {
            return null;
        }
        Set<AuthorityCUSTOMDTO> set_ = new HashSet<AuthorityCUSTOMDTO>();
        for (AuthorityCUSTOM authorityCUSTOM : set) {
            set_.add(authorityCUSTOMMapper.authorityCUSTOMToAuthorityCUSTOMDTO(authorityCUSTOM));
        }
        return set_;
    }

    private Set<AuthorityCUSTOM> authorityCUSTOMDTOSetToAuthorityCUSTOMSet(Set<AuthorityCUSTOMDTO> set) {
        if (set == null) {
            return null;
        }
        Set<AuthorityCUSTOM> set_ = new HashSet<AuthorityCUSTOM>();
        for (AuthorityCUSTOMDTO authorityCUSTOMDTO : set) {
            set_.add(authorityCUSTOMMapper.authorityCUSTOMDTOToAuthorityCUSTOM(authorityCUSTOMDTO));
        }
        return set_;
    }
}