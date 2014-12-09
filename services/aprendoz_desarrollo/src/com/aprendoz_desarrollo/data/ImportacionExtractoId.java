
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.ImportacionExtractoId
 *  12/04/2014 08:27:12
 * 
 */
public class ImportacionExtractoId
    implements Serializable
{

    private String donoA;
    private String dotipo;
    private String ticonA;
    private Date fechaA;
    private String observa;
    private String ncodigo;
    private String forpago;
    private String mes;
    private String donoB;
    private String ticonB;
    private String nro;
    private String donoa;
    private String ticona;
    private String valor;
    private String saldo;
    private String concepto;
    private String nconcepto;
    private String ccosto;
    private String anticipo;
    private String abono;
    private String nit1;
    private String cursoact;
    private String nnombre;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ImportacionExtractoId)) {
            return false;
        }
        ImportacionExtractoId other = ((ImportacionExtractoId) o);
        if (this.donoA == null) {
            if (other.donoA!= null) {
                return false;
            }
        } else {
            if (!this.donoA.equals(other.donoA)) {
                return false;
            }
        }
        if (this.dotipo == null) {
            if (other.dotipo!= null) {
                return false;
            }
        } else {
            if (!this.dotipo.equals(other.dotipo)) {
                return false;
            }
        }
        if (this.ticonA == null) {
            if (other.ticonA!= null) {
                return false;
            }
        } else {
            if (!this.ticonA.equals(other.ticonA)) {
                return false;
            }
        }
        if (this.fechaA == null) {
            if (other.fechaA!= null) {
                return false;
            }
        } else {
            if (!this.fechaA.equals(other.fechaA)) {
                return false;
            }
        }
        if (this.observa == null) {
            if (other.observa!= null) {
                return false;
            }
        } else {
            if (!this.observa.equals(other.observa)) {
                return false;
            }
        }
        if (this.ncodigo == null) {
            if (other.ncodigo!= null) {
                return false;
            }
        } else {
            if (!this.ncodigo.equals(other.ncodigo)) {
                return false;
            }
        }
        if (this.forpago == null) {
            if (other.forpago!= null) {
                return false;
            }
        } else {
            if (!this.forpago.equals(other.forpago)) {
                return false;
            }
        }
        if (this.mes == null) {
            if (other.mes!= null) {
                return false;
            }
        } else {
            if (!this.mes.equals(other.mes)) {
                return false;
            }
        }
        if (this.donoB == null) {
            if (other.donoB!= null) {
                return false;
            }
        } else {
            if (!this.donoB.equals(other.donoB)) {
                return false;
            }
        }
        if (this.ticonB == null) {
            if (other.ticonB!= null) {
                return false;
            }
        } else {
            if (!this.ticonB.equals(other.ticonB)) {
                return false;
            }
        }
        if (this.nro == null) {
            if (other.nro!= null) {
                return false;
            }
        } else {
            if (!this.nro.equals(other.nro)) {
                return false;
            }
        }
        if (this.donoa == null) {
            if (other.donoa!= null) {
                return false;
            }
        } else {
            if (!this.donoa.equals(other.donoa)) {
                return false;
            }
        }
        if (this.ticona == null) {
            if (other.ticona!= null) {
                return false;
            }
        } else {
            if (!this.ticona.equals(other.ticona)) {
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
        if (this.saldo == null) {
            if (other.saldo!= null) {
                return false;
            }
        } else {
            if (!this.saldo.equals(other.saldo)) {
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
        if (this.ccosto == null) {
            if (other.ccosto!= null) {
                return false;
            }
        } else {
            if (!this.ccosto.equals(other.ccosto)) {
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
        if (this.abono == null) {
            if (other.abono!= null) {
                return false;
            }
        } else {
            if (!this.abono.equals(other.abono)) {
                return false;
            }
        }
        if (this.nit1 == null) {
            if (other.nit1 != null) {
                return false;
            }
        } else {
            if (!this.nit1 .equals(other.nit1)) {
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
        if (this.donoA!= null) {
            rtn = (rtn + this.donoA.hashCode());
        }
        rtn = (rtn* 37);
        if (this.dotipo!= null) {
            rtn = (rtn + this.dotipo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ticonA!= null) {
            rtn = (rtn + this.ticonA.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaA!= null) {
            rtn = (rtn + this.fechaA.hashCode());
        }
        rtn = (rtn* 37);
        if (this.observa!= null) {
            rtn = (rtn + this.observa.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ncodigo!= null) {
            rtn = (rtn + this.ncodigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.forpago!= null) {
            rtn = (rtn + this.forpago.hashCode());
        }
        rtn = (rtn* 37);
        if (this.mes!= null) {
            rtn = (rtn + this.mes.hashCode());
        }
        rtn = (rtn* 37);
        if (this.donoB!= null) {
            rtn = (rtn + this.donoB.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ticonB!= null) {
            rtn = (rtn + this.ticonB.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nro!= null) {
            rtn = (rtn + this.nro.hashCode());
        }
        rtn = (rtn* 37);
        if (this.donoa!= null) {
            rtn = (rtn + this.donoa.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ticona!= null) {
            rtn = (rtn + this.ticona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.valor!= null) {
            rtn = (rtn + this.valor.hashCode());
        }
        rtn = (rtn* 37);
        if (this.saldo!= null) {
            rtn = (rtn + this.saldo.hashCode());
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
        if (this.ccosto!= null) {
            rtn = (rtn + this.ccosto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.anticipo!= null) {
            rtn = (rtn + this.anticipo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.abono!= null) {
            rtn = (rtn + this.abono.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nit1 != null) {
            rtn = (rtn + this.nit1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.cursoact!= null) {
            rtn = (rtn + this.cursoact.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nnombre!= null) {
            rtn = (rtn + this.nnombre.hashCode());
        }
        return rtn;
    }

    public String getDonoA() {
        return donoA;
    }

    public void setDonoA(String donoA) {
        this.donoA = donoA;
    }

    public String getDotipo() {
        return dotipo;
    }

    public void setDotipo(String dotipo) {
        this.dotipo = dotipo;
    }

    public String getTiconA() {
        return ticonA;
    }

    public void setTiconA(String ticonA) {
        this.ticonA = ticonA;
    }

    public Date getFechaA() {
        return fechaA;
    }

    public void setFechaA(Date fechaA) {
        this.fechaA = fechaA;
    }

    public String getObserva() {
        return observa;
    }

    public void setObserva(String observa) {
        this.observa = observa;
    }

    public String getNcodigo() {
        return ncodigo;
    }

    public void setNcodigo(String ncodigo) {
        this.ncodigo = ncodigo;
    }

    public String getForpago() {
        return forpago;
    }

    public void setForpago(String forpago) {
        this.forpago = forpago;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public String getDonoB() {
        return donoB;
    }

    public void setDonoB(String donoB) {
        this.donoB = donoB;
    }

    public String getTiconB() {
        return ticonB;
    }

    public void setTiconB(String ticonB) {
        this.ticonB = ticonB;
    }

    public String getNro() {
        return nro;
    }

    public void setNro(String nro) {
        this.nro = nro;
    }

    public String getDonoa() {
        return donoa;
    }

    public void setDonoa(String donoa) {
        this.donoa = donoa;
    }

    public String getTicona() {
        return ticona;
    }

    public void setTicona(String ticona) {
        this.ticona = ticona;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public String getSaldo() {
        return saldo;
    }

    public void setSaldo(String saldo) {
        this.saldo = saldo;
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

    public String getCcosto() {
        return ccosto;
    }

    public void setCcosto(String ccosto) {
        this.ccosto = ccosto;
    }

    public String getAnticipo() {
        return anticipo;
    }

    public void setAnticipo(String anticipo) {
        this.anticipo = anticipo;
    }

    public String getAbono() {
        return abono;
    }

    public void setAbono(String abono) {
        this.abono = abono;
    }

    public String getNit1() {
        return nit1;
    }

    public void setNit1(String nit1) {
        this.nit1 = nit1;
    }

    public String getCursoact() {
        return cursoact;
    }

    public void setCursoact(String cursoact) {
        this.cursoact = cursoact;
    }

    public String getNnombre() {
        return nnombre;
    }

    public void setNnombre(String nnombre) {
        this.nnombre = nnombre;
    }

}
