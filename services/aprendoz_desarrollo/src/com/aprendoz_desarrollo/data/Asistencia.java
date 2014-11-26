
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Asistencia
 *  11/24/2014 08:53:35
 * 
 */
public class Asistencia {

    private Integer idAsistencia;
    private String tipoEventualidadIdTipoEventualidad;
    private String tipoEventualidadIdTipoEventualidad1;
    private String tipoEventualidadIdTipoEventualidad2;
    private String comentario;
    private Sesion sesion;
    private TipoAsistencia tipoAsistencia;
    private Persona persona;

    public Integer getIdAsistencia() {
        return idAsistencia;
    }

    public void setIdAsistencia(Integer idAsistencia) {
        this.idAsistencia = idAsistencia;
    }

    public String getTipoEventualidadIdTipoEventualidad() {
        return tipoEventualidadIdTipoEventualidad;
    }

    public void setTipoEventualidadIdTipoEventualidad(String tipoEventualidadIdTipoEventualidad) {
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
    }

    public String getTipoEventualidadIdTipoEventualidad1() {
        return tipoEventualidadIdTipoEventualidad1;
    }

    public void setTipoEventualidadIdTipoEventualidad1(String tipoEventualidadIdTipoEventualidad1) {
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
    }

    public String getTipoEventualidadIdTipoEventualidad2() {
        return tipoEventualidadIdTipoEventualidad2;
    }

    public void setTipoEventualidadIdTipoEventualidad2(String tipoEventualidadIdTipoEventualidad2) {
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Sesion getSesion() {
        return sesion;
    }

    public void setSesion(Sesion sesion) {
        this.sesion = sesion;
    }

    public TipoAsistencia getTipoAsistencia() {
        return tipoAsistencia;
    }

    public void setTipoAsistencia(TipoAsistencia tipoAsistencia) {
        this.tipoAsistencia = tipoAsistencia;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
