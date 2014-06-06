
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.LogDocentes
 *  06/05/2014 15:30:30
 * 
 */
public class LogDocentes {

    private Integer idLogDocentes;
    private Date fechaIngreso;
    private Date horaIngreso;
    private Persona persona;

    public Integer getIdLogDocentes() {
        return idLogDocentes;
    }

    public void setIdLogDocentes(Integer idLogDocentes) {
        this.idLogDocentes = idLogDocentes;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Date getHoraIngreso() {
        return horaIngreso;
    }

    public void setHoraIngreso(Date horaIngreso) {
        this.horaIngreso = horaIngreso;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
