
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.LogAccionesPadres
 *  10/02/2014 07:48:25
 * 
 */
public class LogAccionesPadres {

    private Integer idLogAccionesPadres;
    private Date fechaCreacion;
    private String tablaAfectada;
    private String usuario;
    private String accionRealizada;

    public Integer getIdLogAccionesPadres() {
        return idLogAccionesPadres;
    }

    public void setIdLogAccionesPadres(Integer idLogAccionesPadres) {
        this.idLogAccionesPadres = idLogAccionesPadres;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getTablaAfectada() {
        return tablaAfectada;
    }

    public void setTablaAfectada(String tablaAfectada) {
        this.tablaAfectada = tablaAfectada;
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

}
