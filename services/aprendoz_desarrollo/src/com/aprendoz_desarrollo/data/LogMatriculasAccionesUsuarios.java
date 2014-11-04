
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.LogMatriculasAccionesUsuarios
 *  10/16/2014 12:01:12
 * 
 */
public class LogMatriculasAccionesUsuarios {

    private Integer idLogAccionesMatriculas;
    private String usuario;
    private String accionRealizada;
    private String tablaAfectada;
    private Date fechaCreacion;
    private Date fechaModificacion;

    public Integer getIdLogAccionesMatriculas() {
        return idLogAccionesMatriculas;
    }

    public void setIdLogAccionesMatriculas(Integer idLogAccionesMatriculas) {
        this.idLogAccionesMatriculas = idLogAccionesMatriculas;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getAccionRealizada() {
        return accionRealizada;
    }

    public void setAccionRealizada(String accionRealizada) {
        this.accionRealizada = accionRealizada;
    }

    public String getTablaAfectada() {
        return tablaAfectada;
    }

    public void setTablaAfectada(String tablaAfectada) {
        this.tablaAfectada = tablaAfectada;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

}
