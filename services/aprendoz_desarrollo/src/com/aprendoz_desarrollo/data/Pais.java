
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Pais
 *  06/05/2014 15:30:29
 * 
 */
public class Pais {

    private Integer idPais;
    private String pais;
    private Set<com.aprendoz_desarrollo.data.EstadoDepartamento> estadoDepartamentos = new HashSet<com.aprendoz_desarrollo.data.EstadoDepartamento>();
    private Set<com.aprendoz_desarrollo.data.Persona> personas = new HashSet<com.aprendoz_desarrollo.data.Persona>();

    public Integer getIdPais() {
        return idPais;
    }

    public void setIdPais(Integer idPais) {
        this.idPais = idPais;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<com.aprendoz_desarrollo.data.EstadoDepartamento> getEstadoDepartamentos() {
        return estadoDepartamentos;
    }

    public void setEstadoDepartamentos(Set<com.aprendoz_desarrollo.data.EstadoDepartamento> estadoDepartamentos) {
        this.estadoDepartamentos = estadoDepartamentos;
    }

    public Set<com.aprendoz_desarrollo.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_desarrollo.data.Persona> personas) {
        this.personas = personas;
    }

}
