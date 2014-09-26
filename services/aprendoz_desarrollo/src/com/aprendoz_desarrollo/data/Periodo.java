
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Periodo
 *  09/25/2014 15:43:06
 * 
 */
public class Periodo {

    private Integer idPeriodo;
    private TipoPeriodo tipoPeriodo;
    private Sy sy;
    private String periodo;
    private Date fechaInicio;
    private Date fechaFin;
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy2>();
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsig>();
    private Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> inscCursoAsigCopies = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsigCopy>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> inscAlumAsigCopy3s = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy3>();

    public Integer getIdPeriodo() {
        return idPeriodo;
    }

    public void setIdPeriodo(Integer idPeriodo) {
        this.idPeriodo = idPeriodo;
    }

    public TipoPeriodo getTipoPeriodo() {
        return tipoPeriodo;
    }

    public void setTipoPeriodo(TipoPeriodo tipoPeriodo) {
        this.tipoPeriodo = tipoPeriodo;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> getInscAlumAsigCopies() {
        return inscAlumAsigCopies;
    }

    public void setInscAlumAsigCopies(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies) {
        this.inscAlumAsigCopies = inscAlumAsigCopies;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> getInscAlumAsigCopy2s() {
        return inscAlumAsigCopy2s;
    }

    public void setInscAlumAsigCopy2s(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> getInscCursoAsigCopies() {
        return inscCursoAsigCopies;
    }

    public void setInscCursoAsigCopies(Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> getInscAlumAsigCopy3s() {
        return inscAlumAsigCopy3s;
    }

    public void setInscAlumAsigCopy3s(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> inscAlumAsigCopy3s) {
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
    }

}
