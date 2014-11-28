
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.TramiteTipoTramiteRol
 *  11/28/2014 10:15:14
 * 
 */
public class TramiteTipoTramiteRol {

    private Integer tramiteTipoRolId;
    private TramiteAccion tramiteAccion;
    private TramiteTipoTramite tramiteTipoTramite;
    private Integer tipoPersonaIdTipoPersona;
    private Boolean requerido;
    private Boolean valorDefecto;
    private Boolean apruebaSolicita;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Boolean notificacion;

    public Integer getTramiteTipoRolId() {
        return tramiteTipoRolId;
    }

    public void setTramiteTipoRolId(Integer tramiteTipoRolId) {
        this.tramiteTipoRolId = tramiteTipoRolId;
    }

    public TramiteAccion getTramiteAccion() {
        return tramiteAccion;
    }

    public void setTramiteAccion(TramiteAccion tramiteAccion) {
        this.tramiteAccion = tramiteAccion;
    }

    public TramiteTipoTramite getTramiteTipoTramite() {
        return tramiteTipoTramite;
    }

    public void setTramiteTipoTramite(TramiteTipoTramite tramiteTipoTramite) {
        this.tramiteTipoTramite = tramiteTipoTramite;
    }

    public Integer getTipoPersonaIdTipoPersona() {
        return tipoPersonaIdTipoPersona;
    }

    public void setTipoPersonaIdTipoPersona(Integer tipoPersonaIdTipoPersona) {
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
    }

    public Boolean getRequerido() {
        return requerido;
    }

    public void setRequerido(Boolean requerido) {
        this.requerido = requerido;
    }

    public Boolean getValorDefecto() {
        return valorDefecto;
    }

    public void setValorDefecto(Boolean valorDefecto) {
        this.valorDefecto = valorDefecto;
    }

    public Boolean getApruebaSolicita() {
        return apruebaSolicita;
    }

    public void setApruebaSolicita(Boolean apruebaSolicita) {
        this.apruebaSolicita = apruebaSolicita;
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

    public Boolean getNotificacion() {
        return notificacion;
    }

    public void setNotificacion(Boolean notificacion) {
        this.notificacion = notificacion;
    }

}
