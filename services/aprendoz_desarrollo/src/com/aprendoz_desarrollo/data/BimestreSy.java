
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.BimestreSy
 *  10/16/2014 12:01:13
 * 
 */
public class BimestreSy {

    private Integer idBimSy;
    private Integer bimestre;
    private Date fechaInicio;
    private Date fechaFin;
    private Sy sy;

    public Integer getIdBimSy() {
        return idBimSy;
    }

    public void setIdBimSy(Integer idBimSy) {
        this.idBimSy = idBimSy;
    }

    public Integer getBimestre() {
        return bimestre;
    }

    public void setBimestre(Integer bimestre) {
        this.bimestre = bimestre;
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

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
