
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoValoracion
 *  10/16/2014 12:01:13
 * 
 */
public class TipoValoracion {

    private Integer idTipoValoracion;
    private String tipoValoracion;
    private Set<com.aprendoz_desarrollo.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollo.data.Actividad>();

    public Integer getIdTipoValoracion() {
        return idTipoValoracion;
    }

    public void setIdTipoValoracion(Integer idTipoValoracion) {
        this.idTipoValoracion = idTipoValoracion;
    }

    public String getTipoValoracion() {
        return tipoValoracion;
    }

    public void setTipoValoracion(String tipoValoracion) {
        this.tipoValoracion = tipoValoracion;
    }

    public Set<com.aprendoz_desarrollo.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
