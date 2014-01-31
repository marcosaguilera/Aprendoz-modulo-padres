
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscPersonaEduCom
 *  01/24/2014 18:46:14
 * 
 */
public class InscPersonaEduCom {

    private Integer idInscPersonaEduCom;
    private Educom educom;
    private Persona persona;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Double descuento;
    private Byte tomaTransporte;

    public Integer getIdInscPersonaEduCom() {
        return idInscPersonaEduCom;
    }

    public void setIdInscPersonaEduCom(Integer idInscPersonaEduCom) {
        this.idInscPersonaEduCom = idInscPersonaEduCom;
    }

    public Educom getEducom() {
        return educom;
    }

    public void setEducom(Educom educom) {
        this.educom = educom;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
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

    public Double getDescuento() {
        return descuento;
    }

    public void setDescuento(Double descuento) {
        this.descuento = descuento;
    }

    public Byte getTomaTransporte() {
        return tomaTransporte;
    }

    public void setTomaTransporte(Byte tomaTransporte) {
        this.tomaTransporte = tomaTransporte;
    }

}
