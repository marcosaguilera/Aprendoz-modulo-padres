
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.TablaAnticiposMatriculasId
 *  09/25/2014 12:54:25
 * 
 */
public class TablaAnticiposMatriculasId
    implements Serializable
{

    private Integer id;
    private String codigoest;
    private String codigoprod;
    private String nombre;
    private Double valor;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof TablaAnticiposMatriculasId)) {
            return false;
        }
        TablaAnticiposMatriculasId other = ((TablaAnticiposMatriculasId) o);
        if (this.id == null) {
            if (other.id!= null) {
                return false;
            }
        } else {
            if (!this.id.equals(other.id)) {
                return false;
            }
        }
        if (this.codigoest == null) {
            if (other.codigoest!= null) {
                return false;
            }
        } else {
            if (!this.codigoest.equals(other.codigoest)) {
                return false;
            }
        }
        if (this.codigoprod == null) {
            if (other.codigoprod!= null) {
                return false;
            }
        } else {
            if (!this.codigoprod.equals(other.codigoprod)) {
                return false;
            }
        }
        if (this.nombre == null) {
            if (other.nombre!= null) {
                return false;
            }
        } else {
            if (!this.nombre.equals(other.nombre)) {
                return false;
            }
        }
        if (this.valor == null) {
            if (other.valor!= null) {
                return false;
            }
        } else {
            if (!this.valor.equals(other.valor)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.id!= null) {
            rtn = (rtn + this.id.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigoest!= null) {
            rtn = (rtn + this.codigoest.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigoprod!= null) {
            rtn = (rtn + this.codigoprod.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre!= null) {
            rtn = (rtn + this.nombre.hashCode());
        }
        rtn = (rtn* 37);
        if (this.valor!= null) {
            rtn = (rtn + this.valor.hashCode());
        }
        return rtn;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigoest() {
        return codigoest;
    }

    public void setCodigoest(String codigoest) {
        this.codigoest = codigoest;
    }

    public String getCodigoprod() {
        return codigoprod;
    }

    public void setCodigoprod(String codigoprod) {
        this.codigoprod = codigoprod;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

}
