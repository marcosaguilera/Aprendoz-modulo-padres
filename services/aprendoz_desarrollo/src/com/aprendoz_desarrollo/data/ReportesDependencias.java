
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.ReportesDependencias
 *  11/24/2014 08:53:35
 * 
 */
public class ReportesDependencias {

    private Integer idReporteDependencia;
    private TipoDependencia tipoDependencia;
    private Reportes reportes;

    public Integer getIdReporteDependencia() {
        return idReporteDependencia;
    }

    public void setIdReporteDependencia(Integer idReporteDependencia) {
        this.idReporteDependencia = idReporteDependencia;
    }

    public TipoDependencia getTipoDependencia() {
        return tipoDependencia;
    }

    public void setTipoDependencia(TipoDependencia tipoDependencia) {
        this.tipoDependencia = tipoDependencia;
    }

    public Reportes getReportes() {
        return reportes;
    }

    public void setReportes(Reportes reportes) {
        this.reportes = reportes;
    }

}
