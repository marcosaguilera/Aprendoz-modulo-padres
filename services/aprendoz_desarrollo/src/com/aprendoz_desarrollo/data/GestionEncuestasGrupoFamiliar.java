
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.GestionEncuestasGrupoFamiliar
 *  06/18/2014 11:04:58
 * 
 */
public class GestionEncuestasGrupoFamiliar {

    private Integer idGestionEncuestaGrupoFamiliar;
    private Boolean encuestaTerminada;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private GrupoFamiliar grupoFamiliar;

    public Integer getIdGestionEncuestaGrupoFamiliar() {
        return idGestionEncuestaGrupoFamiliar;
    }

    public void setIdGestionEncuestaGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
    }

    public Boolean getEncuestaTerminada() {
        return encuestaTerminada;
    }

    public void setEncuestaTerminada(Boolean encuestaTerminada) {
        this.encuestaTerminada = encuestaTerminada;
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

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
