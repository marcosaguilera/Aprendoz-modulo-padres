
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Eje
 *  11/24/2014 08:53:34
 * 
 */
public class Eje {

    private Integer idEje;
    private String ejeTematico;
    private String axis;
    private Boolean activo;
    private Subarea subarea;

    public Integer getIdEje() {
        return idEje;
    }

    public void setIdEje(Integer idEje) {
        this.idEje = idEje;
    }

    public String getEjeTematico() {
        return ejeTematico;
    }

    public void setEjeTematico(String ejeTematico) {
        this.ejeTematico = ejeTematico;
    }

    public String getAxis() {
        return axis;
    }

    public void setAxis(String axis) {
        this.axis = axis;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    public Subarea getSubarea() {
        return subarea;
    }

    public void setSubarea(Subarea subarea) {
        this.subarea = subarea;
    }

}
