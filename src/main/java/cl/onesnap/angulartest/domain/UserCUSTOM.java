package cl.onesnap.angulartest.domain;

import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import java.util.Objects;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;
import java.util.Set;
import java.util.HashSet;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.FetchType;
import org.hibernate.annotations.BatchSize;
import javax.persistence.JoinTable;
import org.hibernate.validator.constraints.Email;
import java.time.ZonedDateTime;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;


/**
 * A UserCUSTOM
 * 
 * @author OneSnap
 */
@Entity
@Table(name = "user_custom")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserCUSTOM {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Pattern(regexp = "^[a-z0-9]*$|(anonymousUser)")
    @NotNull
    @Column(name = "login", nullable = false, unique = true)
    private String login;

    @NotNull
    @Column(name = "password_hash", nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @BatchSize(size = 10)
    @JoinTable(name = "user_custom_authority_custom", joinColumns = {@JoinColumn(name = "user_custom_id", referencedColumnName = "id")}, inverseJoinColumns = {@JoinColumn(name = "authority_custom_name", referencedColumnName = "name")})
    private Set<AuthorityCUSTOM> authorities = new HashSet<>();

    @NotNull
    @Column(name = "activated", nullable = false)
    private Boolean activated = false;

    @Column(name = "lang_key")
    private String langKey;

    @Email
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "activation_key")
    private String activationKey;

    @Column(name = "reset_key")
    private String resetKey;

    @Column(name = "reset_date")
    private ZonedDateTime resetDate = null;

    @NotNull
    @CreatedBy
    @Column(name = "created_by", updatable = false, nullable = false)
    private String createdBy;

    @NotNull
    @CreatedDate
    @Column(name = "created_date", updatable = false, nullable = false)
    private ZonedDateTime createdDate = ZonedDateTime.now();

    @LastModifiedBy
    @Column(name = "last_modified_by", updatable = false)
    private String lastModifiedBy;

    @LastModifiedDate
    @Column(name = "last_modified_date", updatable = false)
    private ZonedDateTime lastModifiedDate = ZonedDateTime.now();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UserCUSTOM userCUSTOM = (UserCUSTOM) o;
        return Objects.equals(id, userCUSTOM.id);
    }

    @Override
    public String toString() {
        return "UserCUSTOM{" + "id=" + id + "}";
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

    public Set<AuthorityCUSTOM> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<AuthorityCUSTOM> authorities) {
        this.authorities = authorities;
    }

    public Boolean isActivated() {
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

    public String getActivationKey() {
        return activationKey;
    }

    public void setActivationKey(String activationKey) {
        this.activationKey = activationKey;
    }

    public String getResetKey() {
        return resetKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

    public ZonedDateTime getResetDate() {
        return resetDate;
    }

    public void setResetDate(ZonedDateTime resetDate) {
        this.resetDate = resetDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public ZonedDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }
}