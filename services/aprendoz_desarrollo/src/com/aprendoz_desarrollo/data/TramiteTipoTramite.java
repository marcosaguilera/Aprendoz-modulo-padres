
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TramiteTipoTramite
 *  10/16/2014 12:01:13
 * 
 */
public class TramiteTipoTramite {

    private Integer idTipoTramite;
    private String tramite;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Set<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols = new HashSet<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol>();
    private Set<com.aprendoz_desarrollo.data.Tramite> tramites = new HashSet<com.aprendoz_desarrollo.data.Tramite>();

    public Integer getIdTipoTramite() {
        return idTipoTramite;
    }

    public void setIdTipoTramite(Integer idTipoTramite) {
        this.idTipoTramite = idTipoTramite;
    }

    public String getTramite() {
        return tramite;
    }

    public void setTramite(String tramite) {
        this.tramite = tramite;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public Set<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol> getTramiteTipoTramiteRols() {
        return tramiteTipoTramiteRols;
    }

    public void setTramiteTipoTramiteRols(Set<com.aprendoz_desarrollo.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols) {
        this.tramiteTipoTramiteRols = tramiteTipoTramiteRols;
    }

    public Set<com.aprendoz_desarrollo.data.Tramite> getTramites() {
        return tramites;
    }

    public void setTramites(Set<com.aprendoz_desarrollo.data.Tramite> tramites) {
        this.tramites = tramites;
    }

}
