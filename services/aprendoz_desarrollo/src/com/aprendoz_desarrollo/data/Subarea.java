
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Subarea
 *  10/16/2014 12:01:12
 * 
 */
public class Subarea {

    private Integer idSubarea;
    private String subarea;
    private Integer idSyIdIdSy;
    private Area area;
    private Set<com.aprendoz_desarrollo.data.Eje> ejes = new HashSet<com.aprendoz_desarrollo.data.Eje>();

    public Integer getIdSubarea() {
        return idSubarea;
    }

    public void setIdSubarea(Integer idSubarea) {
        this.idSubarea = idSubarea;
    }

    public String getSubarea() {
        return subarea;
    }

    public void setSubarea(String subarea) {
        this.subarea = subarea;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Set<com.aprendoz_desarrollo.data.Eje> getEjes() {
        return ejes;
    }

    public void setEjes(Set<com.aprendoz_desarrollo.data.Eje> ejes) {
        this.ejes = ejes;
    }

}
