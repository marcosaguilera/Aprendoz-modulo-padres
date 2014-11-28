
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.VistaAprendizajesSubareaId
 *  11/28/2014 10:15:13
 * 
 */
public class VistaAprendizajesSubareaId
    implements Serializable
{

    private Integer idSubarea;
    private String subarea;
    private Integer idArea;
    private Integer sy;
    private Integer idGrado;
    private String gradoSapiens;
    private Integer subareaGrado;
    private Integer subareaTotal;
    private String grade;
    private Integer idNivel;
    private String grado;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaAprendizajesSubareaId)) {
            return false;
        }
        VistaAprendizajesSubareaId other = ((VistaAprendizajesSubareaId) o);
        if (this.idSubarea == null) {
            if (other.idSubarea!= null) {
                return false;
            }
        } else {
            if (!this.idSubarea.equals(other.idSubarea)) {
                return false;
            }
        }
        if (this.subarea == null) {
            if (other.subarea!= null) {
                return false;
            }
        } else {
            if (!this.subarea.equals(other.subarea)) {
                return false;
            }
        }
        if (this.idArea == null) {
            if (other.idArea!= null) {
                return false;
            }
        } else {
            if (!this.idArea.equals(other.idArea)) {
                return false;
            }
        }
        if (this.sy == null) {
            if (other.sy!= null) {
                return false;
            }
        } else {
            if (!this.sy.equals(other.sy)) {
                return false;
            }
        }
        if (this.idGrado == null) {
            if (other.idGrado!= null) {
                return false;
            }
        } else {
            if (!this.idGrado.equals(other.idGrado)) {
                return false;
            }
        }
        if (this.gradoSapiens == null) {
            if (other.gradoSapiens!= null) {
                return false;
            }
        } else {
            if (!this.gradoSapiens.equals(other.gradoSapiens)) {
                return false;
            }
        }
        if (this.subareaGrado == null) {
            if (other.subareaGrado!= null) {
                return false;
            }
        } else {
            if (!this.subareaGrado.equals(other.subareaGrado)) {
                return false;
            }
        }
        if (this.subareaTotal == null) {
            if (other.subareaTotal!= null) {
                return false;
            }
        } else {
            if (!this.subareaTotal.equals(other.subareaTotal)) {
                return false;
            }
        }
        if (this.grade == null) {
            if (other.grade!= null) {
                return false;
            }
        } else {
            if (!this.grade.equals(other.grade)) {
                return false;
            }
        }
        if (this.idNivel == null) {
            if (other.idNivel!= null) {
                return false;
            }
        } else {
            if (!this.idNivel.equals(other.idNivel)) {
                return false;
            }
        }
        if (this.grado == null) {
            if (other.grado!= null) {
                return false;
            }
        } else {
            if (!this.grado.equals(other.grado)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idSubarea!= null) {
            rtn = (rtn + this.idSubarea.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subarea!= null) {
            rtn = (rtn + this.subarea.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idArea!= null) {
            rtn = (rtn + this.idArea.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sy!= null) {
            rtn = (rtn + this.sy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idGrado!= null) {
            rtn = (rtn + this.idGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gradoSapiens!= null) {
            rtn = (rtn + this.gradoSapiens.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subareaGrado!= null) {
            rtn = (rtn + this.subareaGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.subareaTotal!= null) {
            rtn = (rtn + this.subareaTotal.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grade!= null) {
            rtn = (rtn + this.grade.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idNivel!= null) {
            rtn = (rtn + this.idNivel.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        return rtn;
    }

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

    public Integer getIdArea() {
        return idArea;
    }

    public void setIdArea(Integer idArea) {
        this.idArea = idArea;
    }

    public Integer getSy() {
        return sy;
    }

    public void setSy(Integer sy) {
        this.sy = sy;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public String getGradoSapiens() {
        return gradoSapiens;
    }

    public void setGradoSapiens(String gradoSapiens) {
        this.gradoSapiens = gradoSapiens;
    }

    public Integer getSubareaGrado() {
        return subareaGrado;
    }

    public void setSubareaGrado(Integer subareaGrado) {
        this.subareaGrado = subareaGrado;
    }

    public Integer getSubareaTotal() {
        return subareaTotal;
    }

    public void setSubareaTotal(Integer subareaTotal) {
        this.subareaTotal = subareaTotal;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

}
