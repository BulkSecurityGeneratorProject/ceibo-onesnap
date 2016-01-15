package cl.onesnap.angulartest.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;


/**
 * @author OneSnap
 */
public class AuthenticationFacade {

    public static Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public static Object getPrincipal() {
        Authentication authentication = getAuthentication();
        if (authentication != null) {
            return authentication.getPrincipal();
        }
        return null;
    }
}