
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.PadresCorreoCoordinadorId
 *  11/24/2014 08:53:35
 * 
 */
public class PadresCorreoCoordinadorId
    implements Serializable
{

    private Integer idCurso;
    private String curso;
    private String nombreLdap;
    private String email;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private Integer personaIdPersona;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresCorreoCoordinadorId)) {
            return false;
        }
        PadresCorreoCoordinadorId other = ((PadresCorreoCoordinadorId) o);
        if (this.idCurso == null) {
            if (other.idCurso!= null) {
                return false;
            }
        } else {
            if (!this.idCurso.equals(other.idCurso)) {
                return false;
            }
        }
        if (this.curso == null) {
            if (other.curso!= null) {
                return false;
            }
        } else {
            if (!this.curso.equals(other.curso)) {
                return false;
            }
        }
        if (this.nombreLdap == null) {
            if (other.nombreLdap!= null) {
                return false;
            }
        } else {
            if (!this.nombreLdap.equals(other.nombreLdap)) {
                return false;
            }
        }
        if (this.email == null) {
            if (other.email!= null) {
                return false;
            }
        } else {
            if (!this.email.equals(other.email)) {
                return false;
            }
        }
        if (this.apellido1 == null) {
            if (other.apellido1 != null) {
                return false;
            }
        } else {
            if (!this.apellido1 .equals(other.apellido1)) {
                return false;
            }
        }
        if (this.apellido2 == null) {
            if (other.apellido2 != null) {
                return false;
            }
        } else {
            if (!this.apellido2 .equals(other.apellido2)) {
                return false;
            }
        }
        if (this.nombre1 == null) {
            if (other.nombre1 != null) {
                return false;
            }
        } else {
            if (!this.nombre1 .equals(other.nombre1)) {
                return false;
            }
        }
        if (this.nombre2 == null) {
            if (other.nombre2 != null) {
                return false;
            }
        } else {
            if (!this.nombre2 .equals(other.nombre2)) {
                return false;
            }
        }
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idCurso!= null) {
            rtn = (rtn + this.idCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombreLdap!= null) {
            rtn = (rtn + this.nombreLdap.hashCode());
        }
        rtn = (rtn* 37);
        if (this.email!= null) {
            rtn = (rtn + this.email.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre1 != null) {
            rtn = (rtn + this.nombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre2 != null) {
            rtn = (rtn + this.nombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        return rtn;
    }

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

}
