
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.PerfilPersonaImg
 *  09/18/2014 12:11:12
 * 
 */
public class PerfilPersonaImg {

    private Integer idPersonaImg;
    private Persona persona;
    private String imgName;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public Integer getIdPersonaImg() {
        return idPersonaImg;
    }

    public void setIdPersonaImg(Integer idPersonaImg) {
        this.idPersonaImg = idPersonaImg;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
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

}
