
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TramiteAccion
 *  12/04/2014 08:27:10
 * 
 */
public class TramiteAccion {

    private Integer idAccion;
    private String accion;
    private Set<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols = new HashSet<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol>();

    public Integer getIdAccion() {
        return idAccion;
    }

    public void setIdAccion(Integer idAccion) {
        this.idAccion = idAccion;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public Set<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol> getTramiteTipoTramiteRols() {
        return tramiteTipoTramiteRols;
    }

    public void setTramiteTipoTramiteRols(Set<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols) {
        this.tramiteTipoTramiteRols = tramiteTipoTramiteRols;
    }

}
