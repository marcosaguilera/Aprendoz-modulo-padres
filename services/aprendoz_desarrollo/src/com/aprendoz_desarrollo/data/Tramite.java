
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Tramite
 *  11/24/2014 08:53:35
 * 
 */
public class Tramite {

    private Integer idTramite;
    private Date fechaTramite;
    private Date horaTramite;
    private Date fechaEsperada;
    private Date fechaEntrega;
    private String url_file;
    private String comentarios;
    private Date fechaCreacion;
    private Date fechaModificacion;
    private TramiteTipoTramite tramiteTipoTramite;
    private com.aprendoz_desarrollo.data.Persona solicitante;
    private com.aprendoz_desarrollo.data.Persona referenciado;
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

    public String getUrl_file() {
        return url_file;
    }

    public void setUrl_file(String url_file) {
        this.url_file = url_file;
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

    public com.aprendoz_desarrollo.data.Persona getSolicitante() {
        return solicitante;
    }

    public void setSolicitante(com.aprendoz_desarrollo.data.Persona solicitante) {
        this.solicitante = solicitante;
    }

    public com.aprendoz_desarrollo.data.Persona getReferenciado() {
        return referenciado;
    }

    public void setReferenciado(com.aprendoz_desarrollo.data.Persona referenciado) {
        this.referenciado = referenciado;
    }

    public Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> getTramiteAutorizacioneses() {
        return tramiteAutorizacioneses;
    }

    public void setTramiteAutorizacioneses(Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> tramiteAutorizacioneses) {
        this.tramiteAutorizacioneses = tramiteAutorizacioneses;
    }

}
