
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.NivelEsperado
 *  06/05/2014 15:30:30
 * 
 */
public class NivelEsperado {

    private Integer idNivelEsperado;
    private String nivelEsperado;
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();
    private Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_desarrollo.data.AprendizajesAsignaturas>();

    public Integer getIdNivelEsperado() {
        return idNivelEsperado;
    }

    public void setIdNivelEsperado(Integer idNivelEsperado) {
        this.idNivelEsperado = idNivelEsperado;
    }

    public String getNivelEsperado() {
        return nivelEsperado;
    }

    public void setNivelEsperado(String nivelEsperado) {
        this.nivelEsperado = nivelEsperado;
    }

    public Set<com.aprendoz_desarrollo.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

    public Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

}
