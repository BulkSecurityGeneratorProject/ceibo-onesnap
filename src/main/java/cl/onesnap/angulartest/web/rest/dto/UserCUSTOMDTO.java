package cl.onesnap.angulartest.web.rest.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;
import java.util.Set;
import java.util.HashSet;
import org.hibernate.validator.constraints.Email;
import java.time.ZonedDateTime;


/**
 * A DTO for the UserCUSTOM entity.
 * 
 * @author OneSnap
 */
public class UserCUSTOMDTO implements Serializable {

    public static final int PASSWORD_MIN_LENGTH = 5;

    public static final int PASSWORD_MAX_LENGTH = 100;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Pattern(regexp = "^[a-z0-9]*$|(anonymousUser)")
    @NotNull
    private String login;

    @NotNull
    private String password;

    private Set<AuthorityCUSTOMDTO> authorities = new HashSet<>();

    private Boolean activated;

    private String langKey;

    @Email
    private String email;

    @NotNull
    private String createdBy;

    private ZonedDateTime createdDate;

    private String lastModifiedBy;

    private ZonedDateTime lastModifiedDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        
        UserCUSTOMDTO userCUSTOMDTO = (UserCUSTOMDTO) o;
        
        if (! Objects.equals(id, userCUSTOMDTO.id)) {
            return false;
        }
        
        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "UserCUSTOMDTO{" + "id=" + id + "}";
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<AuthorityCUSTOMDTO> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<AuthorityCUSTOMDTO> authorities) {
        this.authorities = authorities;
    }

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public String getLangKey() {
        return langKey;
    }

    public void setLangKey(String langKey) {
        this.langKey = langKey;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }

    public ZonedDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(ZonedDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }
}