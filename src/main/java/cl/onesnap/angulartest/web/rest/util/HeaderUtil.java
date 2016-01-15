package cl.onesnap.angulartest.web.rest.util;

import org.springframework.http.HttpHeaders;


/**
 * Utility class for http header creation.
 * 
 * @author OneSnap
 */
public class HeaderUtil {

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-angularTestApp-alert", message);
        headers.add("X-angularTestApp-params", param);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("angularTestApp." + entityName + ".created", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("angularTestApp." + entityName + ".updated", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("angularTestApp." + entityName + ".deleted", param);
    }
}