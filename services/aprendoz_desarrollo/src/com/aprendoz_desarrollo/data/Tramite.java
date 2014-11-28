
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Tramite
 *  11/28/2014 10:15:13
 * 
 */
public class Tramite {

    private Integer idTramite;
    private TramiteTipoTramite tramiteTipoTramite;
    private Integer idSolicitante;
    private Integer idReferenciado;
    private Date fechaTramite;
    private Date horaTramite;
    private Date fechaEsperada;
    private Date fechaEntrega;
    private String urlFile;
    private String comentarios;
    private Date fechaCreacion;
    private Date fechaModificacion;
    private Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> tramiteAutorizacioneses = new HashSet<com.aprendoz_desarrollo.data.TramiteAutorizaciones>();

    public Integer getIdTramite() {
        return idTramite;
    }

    public void setIdTramite(Integer idTramite) {
        this.idTramite = idTramite;
    }

    public TramiteTipoTramite getTramiteTipoTramite() {
        return tramiteTipoTramite;
    }

    public void setTramiteTipoTramite(TramiteTipoTramite tramiteTipoTramite) {
        this.tramiteTipoTramite = tramiteTipoTramite;
    }

    public Integer getIdSolicitante() {
        return idSolicitante;
    }

    public void setIdSolicitante(Integer idSolicitante) {
        this.idSolicitante = idSolicitante;
    }

    public Integer getIdReferenciado() {
        return idReferenciado;
    }

    public void setIdReferenciado(Integer idReferenciado) {
        this.idReferenciado = idReferenciado;
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

    public String getUrlFile() {
        return urlFile;
    }

    public void setUrlFile(String urlFile) {
        this.urlFile = urlFile;
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

    public Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> getTramiteAutorizacioneses() {
        return tramiteAutorizacioneses;
    }

    public void setTramiteAutorizacioneses(Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> tramiteAutorizacioneses) {
        this.tramiteAutorizacioneses = tramiteAutorizacioneses;
    }

}
