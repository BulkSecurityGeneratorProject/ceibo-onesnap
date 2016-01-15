package cl.onesnap.angulartest.service.crud;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cl.onesnap.angulartest.repository.UserCUSTOMRepository;
import javax.inject.Inject;
import cl.onesnap.angulartest.web.rest.mapper.UserCUSTOMMapper;
import cl.onesnap.angulartest.domain.UserCUSTOM;
import cl.onesnap.angulartest.web.rest.dto.UserCUSTOMDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * @author OneSnap
 */
@Service
@Transactional
public class UserCUSTOMCRUDService {

    @Inject
    private UserCUSTOMRepository userCUSTOMRepository;

    @Inject
    private UserCUSTOMMapper userCUSTOMMapper;

    public UserCUSTOM createUserCUSTOM(UserCUSTOMDTO userCUSTOMDTO) {
        // TODO: if dto.getId() != null raise CustomParameterizedException
        UserCUSTOM userCUSTOM = userCUSTOMMapper.userCUSTOMDTOToUserCUSTOM(userCUSTOMDTO);
        return userCUSTOMRepository.save(userCUSTOM);
    }

    public UserCUSTOM updateUserCUSTOM(UserCUSTOMDTO userCUSTOMDTO) {
        // TODO: if dto.getId() == null: create
        UserCUSTOM userCUSTOM = userCUSTOMMapper.userCUSTOMDTOToUserCUSTOM(userCUSTOMDTO);
        return userCUSTOMRepository.save(userCUSTOM);
    }

    public Page<UserCUSTOM> getAllUserCUSTOMs(Pageable pageable) {
        return userCUSTOMRepository.findAll(pageable);
    }

    public UserCUSTOM getUserCUSTOM(Long id) {
        return userCUSTOMRepository.findOne(id);
    }

    public void deleteUserCUSTOM(Long id) {
        userCUSTOMRepository.delete(id);
    }
}