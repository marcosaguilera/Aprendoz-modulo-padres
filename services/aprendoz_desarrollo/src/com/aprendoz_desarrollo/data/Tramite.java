
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Tramite
 *  10/16/2014 12:01:12
 * 
 */
public class Tramite {

    private Integer idTramite;
    private Date fechaTramite;
    private Date horaTramite;
    private Date fechaEsperada;
    private Date fechaEntrega;
    private String comentarios;
    private Date fechaCreacion;
    private Date fechaModificacion;
    private TramiteTipoTramite tramiteTipoTramite;
    private com.aprendoz_desarrollo.data.Persona persona_id_solicitante;
    private com.aprendoz_desarrollo.data.Persona persona_id_referenciado;
    private Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> tramiteAutorizacioneses = new HashSet<com.aprendoz_desarrollo.data.TramiteAutorizaciones>();

    public Integer getIdTramite() {
        return idTramite;
    }

    public void setIdTramite(Integer idTramite) {
        this.idTramite = idTramite;
    }

    public Date getFechaTramite() {
        return fechaTramite;
    }

    public void setFechaTramite(Date fechaTramite) {
        this.fechaTramite = fechaTramite;
    }

    public Date getHoraTramite() {
        return horaTramite;
    }

    public void setHoraTramite(Date horaTramite) {
        this.horaTramite = horaTramite;
    }

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
    }

    public Date getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(Date fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public String getComentarios() {
        return comentarios;
    }

    public void setComentarios(String comentarios) {
        this.comentarios = comentarios;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

    public TramiteTipoTramite getTramiteTipoTramite() {
        return tramiteTipoTramite;
    }

    public void setTramiteTipoTramite(TramiteTipoTramite tramiteTipoTramite) {
        this.tramiteTipoTramite = tramiteTipoTramite;
    }

    public com.aprendoz_desarrollo.data.Persona getPersona_id_solicitante() {
        return persona_id_solicitante;
    }

    public void setPersona_id_solicitante(com.aprendoz_desarrollo.data.Persona persona_id_solicitante) {
        this.persona_id_solicitante = persona_id_solicitante;
    }

    public com.aprendoz_desarrollo.data.Persona getPersona_id_referenciado() {
        return persona_id_referenciado;
    }

    public void setPersona_id_referenciado(com.aprendoz_desarrollo.data.Persona persona_id_referenciado) {
        this.persona_id_referenciado = persona_id_referenciado;
    }

    public Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> getTramiteAutorizacioneses() {
        return tramiteAutorizacioneses;
    }

    public void setTramiteAutorizacioneses(Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> tramiteAutorizacioneses) {
        this.tramiteAutorizacioneses = tramiteAutorizacioneses;
    }

}
