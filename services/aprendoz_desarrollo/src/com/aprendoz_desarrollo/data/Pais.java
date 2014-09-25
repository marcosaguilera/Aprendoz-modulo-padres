
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Pais
 *  09/25/2014 12:54:24
 * 
 */
public class Pais {

    private Integer idPais;
    private String pais;
    private Set<com.aprendoz_desarrollo.data.EstadoDepartamento> estadoDepartamentos = new HashSet<com.aprendoz_desarrollo.data.EstadoDepartamento>();
    private Set<com.aprendoz_desarrollo.data.Persona> personas = new HashSet<com.aprendoz_desarrollo.data.Persona>();
    private Set<com.aprendoz_desarrollo.data.PersonaCopy> personaCopies = new HashSet<com.aprendoz_desarrollo.data.PersonaCopy>();

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

    public Set<com.aprendoz_desarrollo.data.PersonaCopy> getPersonaCopies() {
        return personaCopies;
    }

    public void setPersonaCopies(Set<com.aprendoz_desarrollo.data.PersonaCopy> personaCopies) {
        this.personaCopies = personaCopies;
    }

}
