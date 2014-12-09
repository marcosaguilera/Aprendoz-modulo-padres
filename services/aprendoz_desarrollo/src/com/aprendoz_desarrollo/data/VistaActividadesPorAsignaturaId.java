
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.VistaActividadesPorAsignaturaId
 *  12/04/2014 08:27:12
 * 
 */
public class VistaActividadesPorAsignaturaId
    implements Serializable
{

    private Integer idAsignatura;
    private Integer idActividad;
    private String actividad;
    private Date fecha;
    private Boolean requeridoAlternativo;
    private String tipoActividad;
    private String tipoDesempeno;
    private Integer syIdSy;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaActividadesPorAsignaturaId)) {
            return false;
        }
        VistaActividadesPorAsignaturaId other = ((VistaActividadesPorAsignaturaId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        if (this.idActividad == null) {
            if (other.idActividad!= null) {
                return false;
            }
        } else {
            if (!this.idActividad.equals(other.idActividad)) {
                return false;
            }
        }
        if (this.actividad == null) {
            if (other.actividad!= null) {
                return false;
            }
        } else {
            if (!this.actividad.equals(other.actividad)) {
                return false;
            }
        }
        if (this.fecha == null) {
            if (other.fecha!= null) {
                return false;
            }
        } else {
            if (!this.fecha.equals(other.fecha)) {
                return false;
            }
        }
        if (this.requeridoAlternativo == null) {
            if (other.requeridoAlternativo!= null) {
                return false;
            }
        } else {
            if (!this.requeridoAlternativo.equals(other.requeridoAlternativo)) {
                return false;
            }
        }
        if (this.tipoActividad == null) {
            if (other.tipoActividad!= null) {
                return false;
            }
        } else {
            if (!this.tipoActividad.equals(other.tipoActividad)) {
                return false;
            }
        }
        if (this.tipoDesempeno == null) {
            if (other.tipoDesempeno!= null) {
                return false;
            }
        } else {
            if (!this.tipoDesempeno.equals(other.tipoDesempeno)) {
                return false;
            }
        }
        if (this.syIdSy == null) {
            if (other.syIdSy!= null) {
                return false;
            }
        } else {
            if (!this.syIdSy.equals(other.syIdSy)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idActividad!= null) {
            rtn = (rtn + this.idActividad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.actividad!= null) {
            rtn = (rtn + this.actividad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fecha!= null) {
            rtn = (rtn + this.fecha.hashCode());
        }
        rtn = (rtn* 37);
        if (this.requeridoAlternativo!= null) {
            rtn = (rtn + this.requeridoAlternativo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoActividad!= null) {
            rtn = (rtn + this.tipoActividad.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoDesempeno!= null) {
            rtn = (rtn + this.tipoDesempeno.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Integer getIdActividad() {
        return idActividad;
    }

    public void setIdActividad(Integer idActividad) {
        this.idActividad = idActividad;
    }

    public String getActividad() {
        return actividad;
    }

    public void setActividad(String actividad) {
        this.actividad = actividad;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getRequeridoAlternativo() {
        return requeridoAlternativo;
    }

    public void setRequeridoAlternativo(Boolean requeridoAlternativo) {
        this.requeridoAlternativo = requeridoAlternativo;
    }

    public String getTipoActividad() {
        return tipoActividad;
    }

    public void setTipoActividad(String tipoActividad) {
        this.tipoActividad = tipoActividad;
    }

    public String getTipoDesempeno() {
        return tipoDesempeno;
    }

    public void setTipoDesempeno(String tipoDesempeno) {
        this.tipoDesempeno = tipoDesempeno;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

}
