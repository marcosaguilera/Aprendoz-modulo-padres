
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CertificadosFirmas
 *  11/24/2014 08:53:34
 * 
 */
public class CertificadosFirmas {

    private Integer idCertificadosFirmas;
    private Integer syIdSy;
    private String firmaDirector;
    private String firmaSecretario;

    public Integer getIdCertificadosFirmas() {
        return idCertificadosFirmas;
    }

    public void setIdCertificadosFirmas(Integer idCertificadosFirmas) {
        this.idCertificadosFirmas = idCertificadosFirmas;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public String getFirmaDirector() {
        return firmaDirector;
    }

    public void setFirmaDirector(String firmaDirector) {
        this.firmaDirector = firmaDirector;
    }

    public String getFirmaSecretario() {
        return firmaSecretario;
    }

    public void setFirmaSecretario(String firmaSecretario) {
        this.firmaSecretario = firmaSecretario;
    }

}
