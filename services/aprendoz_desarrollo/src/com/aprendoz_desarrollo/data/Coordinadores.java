
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Coordinadores
 *  04/02/2014 11:03:07
 * 
 */
public class Coordinadores {

    private CoordinadoresId id;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public CoordinadoresId getId() {
        return id;
    }

    public void setId(CoordinadoresId id) {
        this.id = id;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
