
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoDesempeno
 *  09/25/2014 12:54:25
 * 
 */
public class TipoDesempeno {

    private Integer idTipoDesempeno;
    private String tipoDesempeno;
    private Set<com.aprendoz_desarrollo.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollo.data.Actividad>();

    public Integer getIdTipoDesempeno() {
        return idTipoDesempeno;
    }

    public void setIdTipoDesempeno(Integer idTipoDesempeno) {
        this.idTipoDesempeno = idTipoDesempeno;
    }

    public String getTipoDesempeno() {
        return tipoDesempeno;
    }

    public void setTipoDesempeno(String tipoDesempeno) {
        this.tipoDesempeno = tipoDesempeno;
    }

    public Set<com.aprendoz_desarrollo.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
