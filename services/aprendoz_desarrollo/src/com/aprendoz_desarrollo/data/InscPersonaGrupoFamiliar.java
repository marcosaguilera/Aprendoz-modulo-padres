
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.InscPersonaGrupoFamiliar
 *  10/16/2014 12:01:12
 * 
 */
public class InscPersonaGrupoFamiliar {

    private Integer idInscPersonaGrupoFamiliar;
    private Boolean responsable;
    private Persona persona;
    private TipoPersona tipoPersona;
    private GrupoFamiliar grupoFamiliar;

    public Integer getIdInscPersonaGrupoFamiliar() {
        return idInscPersonaGrupoFamiliar;
    }

    public void setIdInscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
    }

    public Boolean getResponsable() {
        return responsable;
    }

    public void setResponsable(Boolean responsable) {
        this.responsable = responsable;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
