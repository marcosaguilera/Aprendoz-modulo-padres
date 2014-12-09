
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Tramite
 *  12/04/2014 08:27:10
 * 
 */
public class Tramite {

    private Integer id_tramite;
    private Date fecha_tramite;
    private Date hora_tramite;
    private Date fecha_esperada;
    private Date fecha_entrega;
    private String url_file;
    private String comentarios;
    private Date fecha_creacion;
    private Date fecha_modificacion;
    private TramiteTipoTramite tramiteTipoTramite;
    private com.aprendoz_desarrollo.data.Persona solicitante;
    private com.aprendoz_desarrollo.data.Persona referenciado;
    private Set<com.aprendoz_desarrollo.data.TramiteAutorizaciones> tramiteAutorizacioneses = new HashSet<com.aprendoz_desarrollo.data.TramiteAutorizaciones>();

    public Integer getId_tramite() {
        return id_tramite;
    }

    public void setId_tramite(Integer id_tramite) {
        this.id_tramite = id_tramite;
    }

    public Date getFecha_tramite() {
        return fecha_tramite;
    }

    public void setFecha_tramite(Date fecha_tramite) {
        this.fecha_tramite = fecha_tramite;
    }

    public Date getHora_tramite() {
        return hora_tramite;
    }

    public void setHora_tramite(Date hora_tramite) {
        this.hora_tramite = hora_tramite;
    }

    public Date getFecha_esperada() {
        return fecha_esperada;
    }

    public void setFecha_esperada(Date fecha_esperada) {
        this.fecha_esperada = fecha_esperada;
    }

    public Date getFecha_entrega() {
        return fecha_entrega;
    }

    public void setFecha_entrega(Date fecha_entrega) {
        this.fecha_entrega = fecha_entrega;
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

    public Date getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(Date fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public Date getFecha_modificacion() {
        return fecha_modificacion;
    }

    public void setFecha_modificacion(Date fecha_modificacion) {
        this.fecha_modificacion = fecha_modificacion;
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
