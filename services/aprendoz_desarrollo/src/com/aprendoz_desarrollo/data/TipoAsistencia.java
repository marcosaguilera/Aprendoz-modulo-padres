
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoAsistencia
 *  04/02/2014 11:03:06
 * 
 */
public class TipoAsistencia {

    private Integer idTipo;
    private String tipo;
    private Set<com.aprendoz_desarrollo.data.Asistencia> asistencias = new HashSet<com.aprendoz_desarrollo.data.Asistencia>();

    public Integer getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(Integer idTipo) {
        this.idTipo = idTipo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Set<com.aprendoz_desarrollo.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

}
