
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.AprendizajesAsignaturas
 *  11/28/2014 10:15:14
 * 
 */
public class AprendizajesAsignaturas {

    private Integer idAprendizaje;
    private Inteligencia inteligencia;
    private DimensionComprension dimensionComprension;
    private Asignatura asignatura;
    private NivelEsperado nivelEsperado;
    private DimensionCurricular dimensionCurricular;
    private Date fechaEsperada;
    private String aprendizaje;
    private String learning;
    private Integer peso;
    private Integer ejeIdEje;
    private Integer eje2IdEje;
    private Integer eje3IdEje;

    public Integer getIdAprendizaje() {
        return idAprendizaje;
    }

    public void setIdAprendizaje(Integer idAprendizaje) {
        this.idAprendizaje = idAprendizaje;
    }

    public Inteligencia getInteligencia() {
        return inteligencia;
    }

    public void setInteligencia(Inteligencia inteligencia) {
        this.inteligencia = inteligencia;
    }

    public DimensionComprension getDimensionComprension() {
        return dimensionComprension;
    }

    public void setDimensionComprension(DimensionComprension dimensionComprension) {
        this.dimensionComprension = dimensionComprension;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public NivelEsperado getNivelEsperado() {
        return nivelEsperado;
    }

    public void setNivelEsperado(NivelEsperado nivelEsperado) {
        this.nivelEsperado = nivelEsperado;
    }

    public DimensionCurricular getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(DimensionCurricular dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public Date getFechaEsperada() {
        return fechaEsperada;
    }

    public void setFechaEsperada(Date fechaEsperada) {
        this.fechaEsperada = fechaEsperada;
    }

    public String getAprendizaje() {
        return aprendizaje;
    }

    public void setAprendizaje(String aprendizaje) {
        this.aprendizaje = aprendizaje;
    }

    public String getLearning() {
        return learning;
    }

    public void setLearning(String learning) {
        this.learning = learning;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public Integer getEjeIdEje() {
        return ejeIdEje;
    }

    public void setEjeIdEje(Integer ejeIdEje) {
        this.ejeIdEje = ejeIdEje;
    }

    public Integer getEje2IdEje() {
        return eje2IdEje;
    }

    public void setEje2IdEje(Integer eje2IdEje) {
        this.eje2IdEje = eje2IdEje;
    }

    public Integer getEje3IdEje() {
        return eje3IdEje;
    }

    public void setEje3IdEje(Integer eje3IdEje) {
        this.eje3IdEje = eje3IdEje;
    }

}
