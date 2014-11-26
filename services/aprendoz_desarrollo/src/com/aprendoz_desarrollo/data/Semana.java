
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Semana
 *  11/24/2014 08:53:35
 * 
 */
public class Semana {

    private Integer idSemana;
    private Integer numeroSemana;
    private Sy sy;
    private TipoSemana tipoSemana;

    public Integer getIdSemana() {
        return idSemana;
    }

    public void setIdSemana(Integer idSemana) {
        this.idSemana = idSemana;
    }

    public Integer getNumeroSemana() {
        return numeroSemana;
    }

    public void setNumeroSemana(Integer numeroSemana) {
        this.numeroSemana = numeroSemana;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public TipoSemana getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(TipoSemana tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

}
