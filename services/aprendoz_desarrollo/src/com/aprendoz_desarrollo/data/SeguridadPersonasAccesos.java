
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.SeguridadPersonasAccesos
 *  10/16/2014 12:01:12
 * 
 */
public class SeguridadPersonasAccesos {

    private Integer idSeguridadPersonasAccesos;
    private Byte accesoTemp;
    private Date createdDate;
    private Date updatedDate;
    private String asignadoPor;
    private Persona persona;

    public Integer getIdSeguridadPersonasAccesos() {
        return idSeguridadPersonasAccesos;
    }

    public void setIdSeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
    }

    public Byte getAccesoTemp() {
        return accesoTemp;
    }

    public void setAccesoTemp(Byte accesoTemp) {
        this.accesoTemp = accesoTemp;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getAsignadoPor() {
        return asignadoPor;
    }

    public void setAsignadoPor(String asignadoPor) {
        this.asignadoPor = asignadoPor;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
