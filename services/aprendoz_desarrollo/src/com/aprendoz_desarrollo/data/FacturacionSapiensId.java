
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.FacturacionSapiensId
 *  10/16/2014 12:01:12
 * 
 */
public class FacturacionSapiensId
    implements Serializable
{

    private String dono;
    private String ticon;
    private Date fecha;
    private String concepto;
    private String nconcepto;
    private String valor;
    private String pordcto;
    private String valdcto;
    private String anticipo;
    private String saldo;
    private String nnombre;
    private String cursoact;
    private String alu;
    private String otro;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof FacturacionSapiensId)) {
            return false;
        }
        FacturacionSapiensId other = ((FacturacionSapiensId) o);
        if (this.dono == null) {
            if (other.dono!= null) {
                return false;
            }
        } else {
            if (!this.dono.equals(other.dono)) {
                return false;
            }
        }
        if (this.ticon == null) {
            if (other.ticon!= null) {
                return false;
            }
        } else {
            if (!this.ticon.equals(other.ticon)) {
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
        if (this.concepto == null) {
            if (other.concepto!= null) {
                return false;
            }
        } else {
            if (!this.concepto.equals(other.concepto)) {
                return false;
            }
        }
        if (this.nconcepto == null) {
            if (other.nconcepto!= null) {
                return false;
            }
        } else {
            if (!this.nconcepto.equals(other.nconcepto)) {
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
        if (this.pordcto == null) {
            if (other.pordcto!= null) {
                return false;
            }
        } else {
            if (!this.pordcto.equals(other.pordcto)) {
                return false;
            }
        }
        if (this.valdcto == null) {
            if (other.valdcto!= null) {
                return false;
            }
        } else {
            if (!this.valdcto.equals(other.valdcto)) {
                return false;
            }
        }
        if (this.anticipo == null) {
            if (other.anticipo!= null) {
                return false;
            }
        } else {
            if (!this.anticipo.equals(other.anticipo)) {
                return false;
            }
        }
        if (this.saldo == null) {
            if (other.saldo!= null) {
                return false;
            }
        } else {
            if (!this.saldo.equals(other.saldo)) {
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
        if (this.cursoact == null) {
            if (other.cursoact!= null) {
                return false;
            }
        } else {
            if (!this.cursoact.equals(other.cursoact)) {
                return false;
            }
        }
        if (this.alu == null) {
            if (other.alu!= null) {
                return false;
            }
        } else {
            if (!this.alu.equals(other.alu)) {
                return false;
            }
        }
        if (this.otro == null) {
            if (other.otro!= null) {
                return false;
            }
        } else {
            if (!this.otro.equals(other.otro)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.dono!= null) {
            rtn = (rtn + this.dono.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ticon!= null) {
            rtn = (rtn + this.ticon.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fecha!= null) {
            rtn = (rtn + this.fecha.hashCode());
        }
        rtn = (rtn* 37);
        if (this.concepto!= null) {
            rtn = (rtn + this.concepto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nconcepto!= null) {
            rtn = (rtn + this.nconcepto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.valor!= null) {
            rtn = (rtn + this.valor.hashCode());
        }
        rtn = (rtn* 37);
        if (this.pordcto!= null) {
            rtn = (rtn + this.pordcto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.valdcto!= null) {
            rtn = (rtn + this.valdcto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.anticipo!= null) {
            rtn = (rtn + this.anticipo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.saldo!= null) {
            rtn = (rtn + this.saldo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nnombre!= null) {
            rtn = (rtn + this.nnombre.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cursoact!= null) {
            rtn = (rtn + this.cursoact.hashCode());
        }
        rtn = (rtn* 37);
        if (this.alu!= null) {
            rtn = (rtn + this.alu.hashCode());
        }
        rtn = (rtn* 37);
        if (this.otro!= null) {
            rtn = (rtn + this.otro.hashCode());
        }
        return rtn;
    }

    public String getDono() {
        return dono;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public String getTicon() {
        return ticon;
    }

    public void setTicon(String ticon) {
        this.ticon = ticon;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public String getNconcepto() {
        return nconcepto;
    }

    public void setNconcepto(String nconcepto) {
        this.nconcepto = nconcepto;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public String getPordcto() {
        return pordcto;
    }

    public void setPordcto(String pordcto) {
        this.pordcto = pordcto;
    }

    public String getValdcto() {
        return valdcto;
    }

    public void setValdcto(String valdcto) {
        this.valdcto = valdcto;
    }

    public String getAnticipo() {
        return anticipo;
    }

    public void setAnticipo(String anticipo) {
        this.anticipo = anticipo;
    }

    public String getSaldo() {
        return saldo;
    }

    public void setSaldo(String saldo) {
        this.saldo = saldo;
    }

    public String getNnombre() {
        return nnombre;
    }

    public void setNnombre(String nnombre) {
        this.nnombre = nnombre;
    }

    public String getCursoact() {
        return cursoact;
    }

    public void setCursoact(String cursoact) {
        this.cursoact = cursoact;
    }

    public String getAlu() {
        return alu;
    }

    public void setAlu(String alu) {
        this.alu = alu;
    }

    public String getOtro() {
        return otro;
    }

    public void setOtro(String otro) {
        this.otro = otro;
    }

}
