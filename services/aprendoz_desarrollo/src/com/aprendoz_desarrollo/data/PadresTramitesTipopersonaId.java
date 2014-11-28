
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.PadresTramitesTipopersonaId
 *  11/28/2014 10:15:14
 * 
 */
public class PadresTramitesTipopersonaId
    implements Serializable
{

    private Integer idTipoTramite;
    private String tramite;
    private Boolean disponible;
    private Integer tramiteTipoRolId;
    private Integer tipoTramiteIdTipoTramite;
    private Integer tipoPersonaIdTipoPersona;
    private Boolean requerido;
    private Boolean valorDefecto;
    private Boolean apruebaSolicita;
    private Boolean notificacion;
    private Integer idTipoPersona;
    private String tipoPersona;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PadresTramitesTipopersonaId)) {
            return false;
        }
        PadresTramitesTipopersonaId other = ((PadresTramitesTipopersonaId) o);
        if (this.idTipoTramite == null) {
            if (other.idTipoTramite!= null) {
                return false;
            }
        } else {
            if (!this.idTipoTramite.equals(other.idTipoTramite)) {
                return false;
            }
        }
        if (this.tramite == null) {
            if (other.tramite!= null) {
                return false;
            }
        } else {
            if (!this.tramite.equals(other.tramite)) {
                return false;
            }
        }
        if (this.disponible == null) {
            if (other.disponible!= null) {
                return false;
            }
        } else {
            if (!this.disponible.equals(other.disponible)) {
                return false;
            }
        }
        if (this.tramiteTipoRolId == null) {
            if (other.tramiteTipoRolId!= null) {
                return false;
            }
        } else {
            if (!this.tramiteTipoRolId.equals(other.tramiteTipoRolId)) {
                return false;
            }
        }
        if (this.tipoTramiteIdTipoTramite == null) {
            if (other.tipoTramiteIdTipoTramite!= null) {
                return false;
            }
        } else {
            if (!this.tipoTramiteIdTipoTramite.equals(other.tipoTramiteIdTipoTramite)) {
                return false;
            }
        }
        if (this.tipoPersonaIdTipoPersona == null) {
            if (other.tipoPersonaIdTipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersonaIdTipoPersona.equals(other.tipoPersonaIdTipoPersona)) {
                return false;
            }
        }
        if (this.requerido == null) {
            if (other.requerido!= null) {
                return false;
            }
        } else {
            if (!this.requerido.equals(other.requerido)) {
                return false;
            }
        }
        if (this.valorDefecto == null) {
            if (other.valorDefecto!= null) {
                return false;
            }
        } else {
            if (!this.valorDefecto.equals(other.valorDefecto)) {
                return false;
            }
        }
        if (this.apruebaSolicita == null) {
            if (other.apruebaSolicita!= null) {
                return false;
            }
        } else {
            if (!this.apruebaSolicita.equals(other.apruebaSolicita)) {
                return false;
            }
        }
        if (this.notificacion == null) {
            if (other.notificacion!= null) {
                return false;
            }
        } else {
            if (!this.notificacion.equals(other.notificacion)) {
                return false;
            }
        }
        if (this.idTipoPersona == null) {
            if (other.idTipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.idTipoPersona.equals(other.idTipoPersona)) {
                return false;
            }
        }
        if (this.tipoPersona == null) {
            if (other.tipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersona.equals(other.tipoPersona)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idTipoTramite!= null) {
            rtn = (rtn + this.idTipoTramite.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tramite!= null) {
            rtn = (rtn + this.tramite.hashCode());
        }
        rtn = (rtn* 37);
        if (this.disponible!= null) {
            rtn = (rtn + this.disponible.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tramiteTipoRolId!= null) {
            rtn = (rtn + this.tramiteTipoRolId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoTramiteIdTipoTramite!= null) {
            rtn = (rtn + this.tipoTramiteIdTipoTramite.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersonaIdTipoPersona!= null) {
            rtn = (rtn + this.tipoPersonaIdTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.requerido!= null) {
            rtn = (rtn + this.requerido.hashCode());
        }
        rtn = (rtn* 37);
        if (this.valorDefecto!= null) {
            rtn = (rtn + this.valorDefecto.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apruebaSolicita!= null) {
            rtn = (rtn + this.apruebaSolicita.hashCode());
        }
        rtn = (rtn* 37);
        if (this.notificacion!= null) {
            rtn = (rtn + this.notificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idTipoPersona!= null) {
            rtn = (rtn + this.idTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersona!= null) {
            rtn = (rtn + this.tipoPersona.hashCode());
        }
        return rtn;
    }

    public Integer getIdTipoTramite() {
        return idTipoTramite;
    }

    public void setIdTipoTramite(Integer idTipoTramite) {
        this.idTipoTramite = idTipoTramite;
    }

    public String getTramite() {
        return tramite;
    }

    public void setTramite(String tramite) {
        this.tramite = tramite;
    }

    public Boolean getDisponible() {
        return disponible;
    }

    public void setDisponible(Boolean disponible) {
        this.disponible = disponible;
    }

    public Integer getTramiteTipoRolId() {
        return tramiteTipoRolId;
    }

    public void setTramiteTipoRolId(Integer tramiteTipoRolId) {
        this.tramiteTipoRolId = tramiteTipoRolId;
    }

    public Integer getTipoTramiteIdTipoTramite() {
        return tipoTramiteIdTipoTramite;
    }

    public void setTipoTramiteIdTipoTramite(Integer tipoTramiteIdTipoTramite) {
        this.tipoTramiteIdTipoTramite = tipoTramiteIdTipoTramite;
    }

    public Integer getTipoPersonaIdTipoPersona() {
        return tipoPersonaIdTipoPersona;
    }

    public void setTipoPersonaIdTipoPersona(Integer tipoPersonaIdTipoPersona) {
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
    }

    public Boolean getRequerido() {
        return requerido;
    }

    public void setRequerido(Boolean requerido) {
        this.requerido = requerido;
    }

    public Boolean getValorDefecto() {
        return valorDefecto;
    }

    public void setValorDefecto(Boolean valorDefecto) {
        this.valorDefecto = valorDefecto;
    }

    public Boolean getApruebaSolicita() {
        return apruebaSolicita;
    }

    public void setApruebaSolicita(Boolean apruebaSolicita) {
        this.apruebaSolicita = apruebaSolicita;
    }

    public Boolean getNotificacion() {
        return notificacion;
    }

    public void setNotificacion(Boolean notificacion) {
        this.notificacion = notificacion;
    }

    public Integer getIdTipoPersona() {
        return idTipoPersona;
    }

    public void setIdTipoPersona(Integer idTipoPersona) {
        this.idTipoPersona = idTipoPersona;
    }

    public String getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(String tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

}
