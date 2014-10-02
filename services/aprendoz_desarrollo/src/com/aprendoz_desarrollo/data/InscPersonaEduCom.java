
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscPersonaEduCom
 *  10/02/2014 07:48:24
 * 
 */
public class InscPersonaEduCom {

    private Integer idInscPersonaEduCom;
    private Educom educom;
    private TipoPago tipoPago;
    private Persona persona;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Double descuento;
    private Byte tomaTransporte;
    private String plazo;
    private Boolean activoRetirado;
    private Boolean beca;

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

    public TipoPago getTipoPago() {
        return tipoPago;
    }

    public void setTipoPago(TipoPago tipoPago) {
        this.tipoPago = tipoPago;
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

    public String getPlazo() {
        return plazo;
    }

    public void setPlazo(String plazo) {
        this.plazo = plazo;
    }

    public Boolean getActivoRetirado() {
        return activoRetirado;
    }

    public void setActivoRetirado(Boolean activoRetirado) {
        this.activoRetirado = activoRetirado;
    }

    public Boolean getBeca() {
        return beca;
    }

    public void setBeca(Boolean beca) {
        this.beca = beca;
    }

}
