
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.PersonaEdadId
 *  09/18/2014 12:11:12
 * 
 */
public class PersonaEdadId
    implements Serializable
{

    private Integer idPersona;
    private Integer edad_vistaAlumnosActivos_idPersona_;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PersonaEdadId)) {
            return false;
        }
        PersonaEdadId other = ((PersonaEdadId) o);
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        if (this.edad_vistaAlumnosActivos_idPersona_ == null) {
            if (other.edad_vistaAlumnosActivos_idPersona_!= null) {
                return false;
            }
        } else {
            if (!this.edad_vistaAlumnosActivos_idPersona_.equals(other.edad_vistaAlumnosActivos_idPersona_)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.edad_vistaAlumnosActivos_idPersona_!= null) {
            rtn = (rtn + this.edad_vistaAlumnosActivos_idPersona_.hashCode());
        }
        return rtn;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public Integer getEdad_vistaAlumnosActivos_idPersona_() {
        return edad_vistaAlumnosActivos_idPersona_;
    }

    public void setEdad_vistaAlumnosActivos_idPersona_(Integer edad_vistaAlumnosActivos_idPersona_) {
        this.edad_vistaAlumnosActivos_idPersona_ = edad_vistaAlumnosActivos_idPersona_;
    }

}
