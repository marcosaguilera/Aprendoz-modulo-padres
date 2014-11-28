
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.DimensionCurricular
 *  11/28/2014 10:15:14
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();
    private Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_desarrollo.data.AprendizajesAsignaturas>();

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
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
