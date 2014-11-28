
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.TablaSaldosMatriculasId
 *  11/28/2014 10:15:14
 * 
 */
public class TablaSaldosMatriculasId
    implements Serializable
{

    private String ncodigo;
    private Double totald;
    private String codigoAprendoz;
    private String nnombre;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof TablaSaldosMatriculasId)) {
            return false;
        }
        TablaSaldosMatriculasId other = ((TablaSaldosMatriculasId) o);
        if (this.ncodigo == null) {
            if (other.ncodigo!= null) {
                return false;
            }
        } else {
            if (!this.ncodigo.equals(other.ncodigo)) {
                return false;
            }
        }
        if (this.totald == null) {
            if (other.totald!= null) {
                return false;
            }
        } else {
            if (!this.totald.equals(other.totald)) {
                return false;
            }
        }
        if (this.codigoAprendoz == null) {
            if (other.codigoAprendoz!= null) {
                return false;
            }
        } else {
            if (!this.codigoAprendoz.equals(other.codigoAprendoz)) {
                return false;
            }
        }
        if (this.nnombre == null) {
            if (other.nnombre!= null) {
                return false;
            }
        } else {
            if (!this.nnombre.equals(other.nnombre)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.ncodigo!= null) {
            rtn = (rtn + this.ncodigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.totald!= null) {
            rtn = (rtn + this.totald.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigoAprendoz!= null) {
            rtn = (rtn + this.codigoAprendoz.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nnombre!= null) {
            rtn = (rtn + this.nnombre.hashCode());
        }
        return rtn;
    }

    public String getNcodigo() {
        return ncodigo;
    }

    public void setNcodigo(String ncodigo) {
        this.ncodigo = ncodigo;
    }

    public Double getTotald() {
        return totald;
    }

    public void setTotald(Double totald) {
        this.totald = totald;
    }

    public String getCodigoAprendoz() {
        return codigoAprendoz;
    }

    public void setCodigoAprendoz(String codigoAprendoz) {
        this.codigoAprendoz = codigoAprendoz;
    }

    public String getNnombre() {
        return nnombre;
    }

    public void setNnombre(String nnombre) {
        this.nnombre = nnombre;
    }

}
