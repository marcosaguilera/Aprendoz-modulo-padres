
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.LogIngresoCarne
 *  11/24/2014 08:53:35
 * 
 */
public class LogIngresoCarne {

    private Integer idLogIngresoCarne;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private TipoFalla tipoFalla;
    private Persona persona;

    public Integer getIdLogIngresoCarne() {
        return idLogIngresoCarne;
    }

    public void setIdLogIngresoCarne(Integer idLogIngresoCarne) {
        this.idLogIngresoCarne = idLogIngresoCarne;
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

    public TipoFalla getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(TipoFalla tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
