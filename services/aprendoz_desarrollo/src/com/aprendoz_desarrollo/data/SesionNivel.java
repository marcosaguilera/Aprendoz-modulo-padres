
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.SesionNivel
 *  06/18/2014 11:04:57
 * 
 */
public class SesionNivel {

    private Integer idSesionNivel;
    private Integer numeroSesion;
    private Date horaInicio;
    private Date horaFin;
    private Integer dia;
    private Nivel nivel;
    private Sy sy;

    public Integer getIdSesionNivel() {
        return idSesionNivel;
    }

    public void setIdSesionNivel(Integer idSesionNivel) {
        this.idSesionNivel = idSesionNivel;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Date getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Date getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(Date horaFin) {
        this.horaFin = horaFin;
    }

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
