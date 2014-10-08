
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.VistaDatosPadresId
 *  10/08/2014 08:54:32
 * 
 */
public class VistaDatosPadresId
    implements Serializable
{

    private String periodoescolar;
    private String nivel;
    private String grado;
    private String curso;
    private String codigo;
    private String alumape1;
    private String alumape2;
    private String alumnom1;
    private String alumnom2;
    private Integer idpersona;
    private String numerodocumento;
    private String tipodocumento;
    private Boolean hijodeexalumno;
    private Date fechanacimientoalumno;
    private String tipoPersona;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private String tipoDocumento;
    private String noDocumento;
    private String empresa;
    private String cargo;
    private String profesion;
    private String email;
    private String tel1;
    private String tel2;
    private String celular;
    private String grupoFamiliar;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDatosPadresId)) {
            return false;
        }
        VistaDatosPadresId other = ((VistaDatosPadresId) o);
        if (this.periodoescolar == null) {
            if (other.periodoescolar!= null) {
                return false;
            }
        } else {
            if (!this.periodoescolar.equals(other.periodoescolar)) {
                return false;
            }
        }
        if (this.nivel == null) {
            if (other.nivel!= null) {
                return false;
            }
        } else {
            if (!this.nivel.equals(other.nivel)) {
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
        if (this.curso == null) {
            if (other.curso!= null) {
                return false;
            }
        } else {
            if (!this.curso.equals(other.curso)) {
                return false;
            }
        }
        if (this.codigo == null) {
            if (other.codigo!= null) {
                return false;
            }
        } else {
            if (!this.codigo.equals(other.codigo)) {
                return false;
            }
        }
        if (this.alumape1 == null) {
            if (other.alumape1 != null) {
                return false;
            }
        } else {
            if (!this.alumape1 .equals(other.alumape1)) {
                return false;
            }
        }
        if (this.alumape2 == null) {
            if (other.alumape2 != null) {
                return false;
            }
        } else {
            if (!this.alumape2 .equals(other.alumape2)) {
                return false;
            }
        }
        if (this.alumnom1 == null) {
            if (other.alumnom1 != null) {
                return false;
            }
        } else {
            if (!this.alumnom1 .equals(other.alumnom1)) {
                return false;
            }
        }
        if (this.alumnom2 == null) {
            if (other.alumnom2 != null) {
                return false;
            }
        } else {
            if (!this.alumnom2 .equals(other.alumnom2)) {
                return false;
            }
        }
        if (this.idpersona == null) {
            if (other.idpersona!= null) {
                return false;
            }
        } else {
            if (!this.idpersona.equals(other.idpersona)) {
                return false;
            }
        }
        if (this.numerodocumento == null) {
            if (other.numerodocumento!= null) {
                return false;
            }
        } else {
            if (!this.numerodocumento.equals(other.numerodocumento)) {
                return false;
            }
        }
        if (this.tipodocumento == null) {
            if (other.tipodocumento!= null) {
                return false;
            }
        } else {
            if (!this.tipodocumento.equals(other.tipodocumento)) {
                return false;
            }
        }
        if (this.hijodeexalumno == null) {
            if (other.hijodeexalumno!= null) {
                return false;
            }
        } else {
            if (!this.hijodeexalumno.equals(other.hijodeexalumno)) {
                return false;
            }
        }
        if (this.fechanacimientoalumno == null) {
            if (other.fechanacimientoalumno!= null) {
                return false;
            }
        } else {
            if (!this.fechanacimientoalumno.equals(other.fechanacimientoalumno)) {
                return false;
            }
        }
        if (this.tipoPersona == null) {
            if (other.tipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersona.equals(other.tipoPersona)) {
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
        if (this.tipoDocumento == null) {
            if (other.tipoDocumento!= null) {
                return false;
            }
        } else {
            if (!this.tipoDocumento.equals(other.tipoDocumento)) {
                return false;
            }
        }
        if (this.noDocumento == null) {
            if (other.noDocumento!= null) {
                return false;
            }
        } else {
            if (!this.noDocumento.equals(other.noDocumento)) {
                return false;
            }
        }
        if (this.empresa == null) {
            if (other.empresa!= null) {
                return false;
            }
        } else {
            if (!this.empresa.equals(other.empresa)) {
                return false;
            }
        }
        if (this.cargo == null) {
            if (other.cargo!= null) {
                return false;
            }
        } else {
            if (!this.cargo.equals(other.cargo)) {
                return false;
            }
        }
        if (this.profesion == null) {
            if (other.profesion!= null) {
                return false;
            }
        } else {
            if (!this.profesion.equals(other.profesion)) {
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
        if (this.tel1 == null) {
            if (other.tel1 != null) {
                return false;
            }
        } else {
            if (!this.tel1 .equals(other.tel1)) {
                return false;
            }
        }
        if (this.tel2 == null) {
            if (other.tel2 != null) {
                return false;
            }
        } else {
            if (!this.tel2 .equals(other.tel2)) {
                return false;
            }
        }
        if (this.celular == null) {
            if (other.celular!= null) {
                return false;
            }
        } else {
            if (!this.celular.equals(other.celular)) {
                return false;
            }
        }
        if (this.grupoFamiliar == null) {
            if (other.grupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliar.equals(other.grupoFamiliar)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.periodoescolar!= null) {
            rtn = (rtn + this.periodoescolar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nivel!= null) {
            rtn = (rtn + this.nivel.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigo!= null) {
            rtn = (rtn + this.codigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumape1 != null) {
            rtn = (rtn + this.alumape1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumape2 != null) {
            rtn = (rtn + this.alumape2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnom1 != null) {
            rtn = (rtn + this.alumnom1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnom2 != null) {
            rtn = (rtn + this.alumnom2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.idpersona!= null) {
            rtn = (rtn + this.idpersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.numerodocumento!= null) {
            rtn = (rtn + this.numerodocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipodocumento!= null) {
            rtn = (rtn + this.tipodocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.hijodeexalumno!= null) {
            rtn = (rtn + this.hijodeexalumno.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechanacimientoalumno!= null) {
            rtn = (rtn + this.fechanacimientoalumno.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersona!= null) {
            rtn = (rtn + this.tipoPersona.hashCode());
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
        if (this.tipoDocumento!= null) {
            rtn = (rtn + this.tipoDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.noDocumento!= null) {
            rtn = (rtn + this.noDocumento.hashCode());
        }
        rtn = (rtn* 37);
        if (this.empresa!= null) {
            rtn = (rtn + this.empresa.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cargo!= null) {
            rtn = (rtn + this.cargo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.profesion!= null) {
            rtn = (rtn + this.profesion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.email!= null) {
            rtn = (rtn + this.email.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tel1 != null) {
            rtn = (rtn + this.tel1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.tel2 != null) {
            rtn = (rtn + this.tel2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.celular!= null) {
            rtn = (rtn + this.celular.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliar.hashCode());
        }
        return rtn;
    }

    public String getPeriodoescolar() {
        return periodoescolar;
    }

    public void setPeriodoescolar(String periodoescolar) {
        this.periodoescolar = periodoescolar;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getAlumape1() {
        return alumape1;
    }

    public void setAlumape1(String alumape1) {
        this.alumape1 = alumape1;
    }

    public String getAlumape2() {
        return alumape2;
    }

    public void setAlumape2(String alumape2) {
        this.alumape2 = alumape2;
    }

    public String getAlumnom1() {
        return alumnom1;
    }

    public void setAlumnom1(String alumnom1) {
        this.alumnom1 = alumnom1;
    }

    public String getAlumnom2() {
        return alumnom2;
    }

    public void setAlumnom2(String alumnom2) {
        this.alumnom2 = alumnom2;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public String getNumerodocumento() {
        return numerodocumento;
    }

    public void setNumerodocumento(String numerodocumento) {
        this.numerodocumento = numerodocumento;
    }

    public String getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(String tipodocumento) {
        this.tipodocumento = tipodocumento;
    }

    public Boolean getHijodeexalumno() {
        return hijodeexalumno;
    }

    public void setHijodeexalumno(Boolean hijodeexalumno) {
        this.hijodeexalumno = hijodeexalumno;
    }

    public Date getFechanacimientoalumno() {
        return fechanacimientoalumno;
    }

    public void setFechanacimientoalumno(Date fechanacimientoalumno) {
        this.fechanacimientoalumno = fechanacimientoalumno;
    }

    public String getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(String tipoPersona) {
        this.tipoPersona = tipoPersona;
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

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel1() {
        return tel1;
    }

    public void setTel1(String tel1) {
        this.tel1 = tel1;
    }

    public String getTel2() {
        return tel2;
    }

    public void setTel2(String tel2) {
        this.tel2 = tel2;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
