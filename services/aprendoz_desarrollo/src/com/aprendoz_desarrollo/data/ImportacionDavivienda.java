
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.ImportacionDavivienda
 *  10/08/2014 08:54:33
 * 
 */
public class ImportacionDavivienda {

    private Integer idImportacionDavivienda;
    private String tarjeta;
    private String nombresocio;
    private String numeroidentificacion;
    private String codigo;
    private Date fechaCreacion;
    private Date fechaModificacion;

    public Integer getIdImportacionDavivienda() {
        return idImportacionDavivienda;
    }

    public void setIdImportacionDavivienda(Integer idImportacionDavivienda) {
        this.idImportacionDavivienda = idImportacionDavivienda;
    }

    public String getTarjeta() {
        return tarjeta;
    }

    public void setTarjeta(String tarjeta) {
        this.tarjeta = tarjeta;
    }

    public String getNombresocio() {
        return nombresocio;
    }

    public void setNombresocio(String nombresocio) {
        this.nombresocio = nombresocio;
    }

    public String getNumeroidentificacion() {
        return numeroidentificacion;
    }

    public void setNumeroidentificacion(String numeroidentificacion) {
        this.numeroidentificacion = numeroidentificacion;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
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
