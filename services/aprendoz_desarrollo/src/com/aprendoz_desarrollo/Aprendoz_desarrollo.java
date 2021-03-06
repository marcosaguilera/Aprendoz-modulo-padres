
package com.aprendoz_desarrollo;

import java.util.Date;
import java.util.List;
import com.aprendoz_desarrollo.data.output.DetailsActivitiesStudentRtnType;
import com.aprendoz_desarrollo.data.output.GetActivityScoreByIdUserRtnType;
import com.aprendoz_desarrollo.data.output.GetCoordinatorInfoRtnType;
import com.aprendoz_desarrollo.data.output.GetCostosRtnType;
import com.aprendoz_desarrollo.data.output.GetCostosTransporteRtnType;
import com.aprendoz_desarrollo.data.output.GetEducomAFRRtnType;
import com.aprendoz_desarrollo.data.output.GetEducomCountRtnType;
import com.aprendoz_desarrollo.data.output.GetEducomEADRtnType;
import com.aprendoz_desarrollo.data.output.GetEducomECRRtnType;
import com.aprendoz_desarrollo.data.output.GetEducomEPDRtnType;
import com.aprendoz_desarrollo.data.output.GetEducomOLARtnType;
import com.aprendoz_desarrollo.data.output.GetGradoUsuarioRtnType;
import com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyIdPersonaRtnType;
import com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType;
import com.aprendoz_desarrollo.data.output.GetIdPersonabyUserRtnType;
import com.aprendoz_desarrollo.data.output.GetIdbyUserRtnType;
import com.aprendoz_desarrollo.data.output.GetInscPersonaGrupoFamiliarRtnType;
import com.aprendoz_desarrollo.data.output.GetLogEncuestaRtnType;
import com.aprendoz_desarrollo.data.output.GetMaxEducomRtnType;
import com.aprendoz_desarrollo.data.output.GetSubjectsByStudentRtnType;
import com.aprendoz_desarrollo.data.output.GetSyByCurDateRtnType;
import com.aprendoz_desarrollo.data.output.GetTodosCostosRtnType;
import com.aprendoz_desarrollo.data.output.GetUserbyIdPersonaRtnType;
import com.aprendoz_desarrollo.data.output.HaveNewIntegrantsRtnType;
import com.aprendoz_desarrollo.data.output.Hq_ls_gradoRtnType;
import com.aprendoz_desarrollo.data.output.HqlAlergiasByUserRtnType;
import com.aprendoz_desarrollo.data.output.HqlGetTotalPagarRtnType;
import com.aprendoz_desarrollo.data.output.HqlTipoTramiteRtnType;
import com.aprendoz_desarrollo.data.output.Hql_dash_asignaturasRtnType;
import com.aprendoz_desarrollo.data.output.Hql_ls_paisRtnType;
import com.aprendoz_desarrollo.data.output.ImgNameByUserRtnType;
import com.aprendoz_desarrollo.data.output.ListadoEstudiantesGrupoFamiliarRtnType;
import com.aprendoz_desarrollo.data.output.MailAcudienteRtnType;
import com.aprendoz_desarrollo.data.output.MailMadreRtnType;
import com.aprendoz_desarrollo.data.output.MailPadreRtnType;
import com.aprendoz_desarrollo.data.output.ParentsCostosEduComRtnType;
import com.aprendoz_desarrollo.data.output.ParentsFinalCualificationRtnType;
import com.aprendoz_desarrollo.data.output.ParentsHistoryCualificationsRtnType;
import com.aprendoz_desarrollo.data.output.ParentsLearningsStructureRtnType;
import com.aprendoz_desarrollo.data.output.ParentsScoreDetailsRtnType;
import com.aprendoz_desarrollo.data.output.ParentsSubjectStructureRtnType;
import com.aprendoz_desarrollo.data.output.PersonaGetInfoRtnType;
import com.aprendoz_desarrollo.data.output.ReturExitsValueRtnType;
import com.aprendoz_desarrollo.data.output.ReturnExistsValueGrupoFamiliarRtnType;
import com.aprendoz_desarrollo.data.output.ShowInformationUserRtnType;
import com.aprendoz_desarrollo.data.output.StudentSujectActivitiesRtnType;
import com.aprendoz_desarrollo.data.output._countGrupoFamiliarUpdatedRtnType;
import com.aprendoz_desarrollo.data.output._existeFichaMedicaByUserRtnType;
import com.aprendoz_desarrollo.data.output._hqlAlergiasByUserRtnType;
import com.aprendoz_desarrollo.data.output._hqlFichaMedicaByUserRtnType;
import com.aprendoz_desarrollo.data.output._typeUserByUsernameRtnType;
import com.aprendoz_desarrollo.data.output._verificaResponsableRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_desarrollo"
 *  11/24/2014 08:53:51
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_desarrollo
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<_countGrupoFamiliarUpdatedRtnType> _countGrupoFamiliarUpdated(Integer idgrupofamiliar, PagingOptions pagingOptions) {
        return ((List<_countGrupoFamiliarUpdatedRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._countGrupoFamiliarUpdatedQueryName), idgrupofamiliar, pagingOptions));
    }

    public Integer _detallesAlimentos(Integer idp, String alergias, String especiales, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._detallesAlimentosQueryName), idp, alergias, especiales, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<_existeFichaMedicaByUserRtnType> _existeFichaMedicaByUser(Integer idp, PagingOptions pagingOptions) {
        return ((List<_existeFichaMedicaByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._existeFichaMedicaByUserQueryName), idp, pagingOptions));
    }

    public List<_hqlAlergiasByUserRtnType> _hqlAlergiasByUser(Integer idp, PagingOptions pagingOptions) {
        return ((List<_hqlAlergiasByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._hqlAlergiasByUserQueryName), idp, pagingOptions));
    }

    public List<_hqlFichaMedicaByUserRtnType> _hqlFichaMedicaByUser(Integer idp, PagingOptions pagingOptions) {
        return ((List<_hqlFichaMedicaByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._hqlFichaMedicaByUserQueryName), idp, pagingOptions));
    }

    public List<_typeUserByUsernameRtnType> _typeUserByUsername(String user, PagingOptions pagingOptions) {
        return ((List<_typeUserByUsernameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._typeUserByUsernameQueryName), user, pagingOptions));
    }

    public List<_verificaResponsableRtnType> _verificaResponsable(Integer idgf, PagingOptions pagingOptions) {
        return ((List<_verificaResponsableRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._verificaResponsableQueryName), idgf, pagingOptions));
    }

    public List<DetailsActivitiesStudentRtnType> detailsActivitiesStudent(Integer idp, Integer idsy, Integer idact, PagingOptions pagingOptions) {
        return ((List<DetailsActivitiesStudentRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.detailsActivitiesStudentQueryName), idp, idsy, idact, pagingOptions));
    }

    public List<GetActivityScoreByIdUserRtnType> getActivityScoreByIdUser(Integer pidpersona, Integer pidactividad, PagingOptions pagingOptions) {
        return ((List<GetActivityScoreByIdUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getActivityScoreByIdUserQueryName), pidpersona, pidactividad, pagingOptions));
    }

    public com.aprendoz_desarrollo.data.output.GetAsignaturasMalasRtnType getAsignaturasMalas(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollo.data.output.GetAsignaturasMalasRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.GetAsignaturasMalasRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getAsignaturasMalasQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetCoordinatorInfoRtnType> getCoordinatorInfo(Integer id, PagingOptions pagingOptions) {
        return ((List<GetCoordinatorInfoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getCoordinatorInfoQueryName), id, pagingOptions));
    }

    public List<GetCostosRtnType> getCostos(Integer idg, Integer cod, PagingOptions pagingOptions) {
        return ((List<GetCostosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getCostosQueryName), idg, cod, pagingOptions));
    }

    public List<GetCostosTransporteRtnType> getCostosTransporte(Integer idg, String cod, Boolean nuevo, PagingOptions pagingOptions) {
        return ((List<GetCostosTransporteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getCostosTransporteQueryName), idg, cod, nuevo, pagingOptions));
    }

    public List<GetEducomAFRRtnType> getEducomAFR(Integer pidsy, Integer pidpersona, PagingOptions pagingOptions) {
        return ((List<GetEducomAFRRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getEducomAFRQueryName), pidsy, pidpersona, pagingOptions));
    }

    public List<GetEducomCountRtnType> getEducomCount(Integer pidsy, Integer pidpersona, PagingOptions pagingOptions) {
        return ((List<GetEducomCountRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getEducomCountQueryName), pidsy, pidpersona, pagingOptions));
    }

    public List<GetEducomEADRtnType> getEducomEAD(Integer pidsy, Integer pidpersona, PagingOptions pagingOptions) {
        return ((List<GetEducomEADRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getEducomEADQueryName), pidsy, pidpersona, pagingOptions));
    }

    public List<GetEducomECRRtnType> getEducomECR(Integer pidsy, Integer pidpersona, PagingOptions pagingOptions) {
        return ((List<GetEducomECRRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getEducomECRQueryName), pidsy, pidpersona, pagingOptions));
    }

    public List<GetEducomEPDRtnType> getEducomEPD(Integer pidsy, Integer pidpersona, PagingOptions pagingOptions) {
        return ((List<GetEducomEPDRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getEducomEPDQueryName), pidsy, pidpersona, pagingOptions));
    }

    public List<GetEducomOLARtnType> getEducomOLA(Integer pidsy, Integer pidpersona, PagingOptions pagingOptions) {
        return ((List<GetEducomOLARtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getEducomOLAQueryName), pidsy, pidpersona, pagingOptions));
    }

    public com.aprendoz_desarrollo.data.Formulario5a getFormulario5aById(Integer idFormulario, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollo.data.Formulario5a> rtn = ((List<com.aprendoz_desarrollo.data.Formulario5a> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getFormulario5aByIdQueryName), idFormulario, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetGradoUsuarioRtnType> getGradoUsuario(Integer idp, PagingOptions pagingOptions) {
        return ((List<GetGradoUsuarioRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getGradoUsuarioQueryName), idp, pagingOptions));
    }

    public List<GetGrupoFamiliarbyIdPersonaRtnType> getGrupoFamiliarbyIdPersona(Integer idp, PagingOptions pagingOptions) {
        return ((List<GetGrupoFamiliarbyIdPersonaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getGrupoFamiliarbyIdPersonaQueryName), idp, pagingOptions));
    }

    public List<GetGrupoFamiliarbyUserRtnType> getGrupoFamiliarbyUser(Integer idgrupo, PagingOptions pagingOptions) {
        return ((List<GetGrupoFamiliarbyUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getGrupoFamiliarbyUserQueryName), idgrupo, pagingOptions));
    }

    public List<GetIdPersonabyUserRtnType> getIdPersonabyUser(String username, PagingOptions pagingOptions) {
        return ((List<GetIdPersonabyUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getIdPersonabyUserQueryName), username, pagingOptions));
    }

    public List<GetIdbyUserRtnType> getIdbyUser(String user, PagingOptions pagingOptions) {
        return ((List<GetIdbyUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getIdbyUserQueryName), user, pagingOptions));
    }

    public List<GetInscPersonaGrupoFamiliarRtnType> getInscPersonaGrupoFamiliar(Integer gf) {
        return ((List<GetInscPersonaGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.GetInscPersonaGrupoFamiliarQueryName), gf));
    }

    public List<GetLogEncuestaRtnType> getLogEncuesta(Integer idgp, PagingOptions pagingOptions) {
        return ((List<GetLogEncuestaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getLogEncuestaQueryName), idgp, pagingOptions));
    }

    public List<GetMaxEducomRtnType> getMaxEducom(Integer pideducom, Integer pidsy, PagingOptions pagingOptions) {
        return ((List<GetMaxEducomRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getMaxEducomQueryName), pideducom, pidsy, pagingOptions));
    }

    public com.aprendoz_desarrollo.data.GrupoFamiliar getNombreGrupoFamiliar(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollo.data.GrupoFamiliar> rtn = ((List<com.aprendoz_desarrollo.data.GrupoFamiliar> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getNombreGrupoFamiliarQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetSubjectsByStudentRtnType> getSubjectsByStudent(Integer idpersona, Integer idsy, PagingOptions pagingOptions) {
        return ((List<GetSubjectsByStudentRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getSubjectsByStudentQueryName), idpersona, idsy, pagingOptions));
    }

    public List<GetSyByCurDateRtnType> getSyByCurDate(Date f1, PagingOptions pagingOptions) {
        return ((List<GetSyByCurDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getSyByCurDateQueryName), f1, pagingOptions));
    }

    public com.aprendoz_desarrollo.data.TipoCosto getTipoCostoById(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollo.data.TipoCosto> rtn = ((List<com.aprendoz_desarrollo.data.TipoCosto> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTipoCostoByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_desarrollo.data.output.GetTipoPersonaByUserRtnType getTipoPersonaByUser(String user, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollo.data.output.GetTipoPersonaByUserRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.GetTipoPersonaByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTipoPersonaByUserQueryName), user, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetTodosCostosRtnType> getTodosCostos(Integer idp, String cod, Boolean nuevo, Integer sy, String cod2, PagingOptions pagingOptions) {
        return ((List<GetTodosCostosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTodosCostosQueryName), idp, cod, nuevo, sy, cod2, pagingOptions));
    }

    public List<GetUserbyIdPersonaRtnType> getUserbyIdPersona(Integer id, PagingOptions pagingOptions) {
        return ((List<GetUserbyIdPersonaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getUserbyIdPersonaQueryName), id, pagingOptions));
    }

    public List<HaveNewIntegrantsRtnType> haveNewIntegrants(Integer grupo, PagingOptions pagingOptions) {
        return ((List<HaveNewIntegrantsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.haveNewIntegrantsQueryName), grupo, pagingOptions));
    }

    public List<Hq_ls_gradoRtnType> hq_ls_grado(PagingOptions pagingOptions) {
        return ((List<Hq_ls_gradoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hq_ls_gradoQueryName), pagingOptions));
    }

    public List<HqlAlergiasByUserRtnType> hqlAlergiasByUser(Integer idp, PagingOptions pagingOptions) {
        return ((List<HqlAlergiasByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hqlAlergiasByUserQueryName), idp, pagingOptions));
    }

    public List<HqlGetTotalPagarRtnType> hqlGetTotalPagar(Integer idp, PagingOptions pagingOptions) {
        return ((List<HqlGetTotalPagarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hqlGetTotalPagarQueryName), idp, pagingOptions));
    }

    public List<HqlTipoTramiteRtnType> hqlTipoTramite(PagingOptions pagingOptions) {
        return ((List<HqlTipoTramiteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hqlTipoTramiteQueryName), pagingOptions));
    }

    public List<Hql_dash_asignaturasRtnType> hql_dash_asignaturas(Integer idsy, Integer idpersona, PagingOptions pagingOptions) {
        return ((List<Hql_dash_asignaturasRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hql_dash_asignaturasQueryName), idsy, idpersona, pagingOptions));
    }

    public List<Hql_ls_paisRtnType> hql_ls_pais(PagingOptions pagingOptions) {
        return ((List<Hql_ls_paisRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hql_ls_paisQueryName), pagingOptions));
    }

    public List<ImgNameByUserRtnType> imgNameByUser(String pidpersona, PagingOptions pagingOptions) {
        return ((List<ImgNameByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.imgNameByUserQueryName), pidpersona, pagingOptions));
    }

    public Integer imgUpdateNameByUser(String pimageName, Integer id, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.imgUpdateNameByUserQueryName), pimageName, id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<ListadoEstudiantesGrupoFamiliarRtnType> listadoEstudiantesGrupoFamiliar(Integer idg, PagingOptions pagingOptions) {
        return ((List<ListadoEstudiantesGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.listadoEstudiantesGrupoFamiliarQueryName), idg, pagingOptions));
    }

    public List<MailAcudienteRtnType> mailAcudiente(Integer grupo, PagingOptions pagingOptions) {
        return ((List<MailAcudienteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.mailAcudienteQueryName), grupo, pagingOptions));
    }

    public List<MailMadreRtnType> mailMadre(Integer grupo, PagingOptions pagingOptions) {
        return ((List<MailMadreRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.mailMadreQueryName), grupo, pagingOptions));
    }

    public List<MailPadreRtnType> mailPadre(Integer grupo, PagingOptions pagingOptions) {
        return ((List<MailPadreRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.mailPadreQueryName), grupo, pagingOptions));
    }

    public List<ParentsCostosEduComRtnType> parentsCostosEduCom(Date f1, Integer y, PagingOptions pagingOptions) {
        return ((List<ParentsCostosEduComRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsCostosEduComQueryName), f1, y, pagingOptions));
    }

    public Integer parentsDeleteSubscription(Integer idrecord, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsDeleteSubscriptionQueryName), idrecord, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<ParentsFinalCualificationRtnType> parentsFinalCualification(Integer idApr, Integer idPer, PagingOptions pagingOptions) {
        return ((List<ParentsFinalCualificationRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsFinalCualificationQueryName), idApr, idPer, pagingOptions));
    }

    public List<ParentsHistoryCualificationsRtnType> parentsHistoryCualifications(Integer idPer2, Integer idApr2, PagingOptions pagingOptions) {
        return ((List<ParentsHistoryCualificationsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsHistoryCualificationsQueryName), idPer2, idApr2, pagingOptions));
    }

    public List<ParentsLearningsStructureRtnType> parentsLearningsStructure(Integer ida2, Integer idapr2, PagingOptions pagingOptions) {
        return ((List<ParentsLearningsStructureRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsLearningsStructureQueryName), ida2, idapr2, pagingOptions));
    }

    public List<ParentsScoreDetailsRtnType> parentsScoreDetails(Integer idiaa, PagingOptions pagingOptions) {
        return ((List<ParentsScoreDetailsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsScoreDetailsQueryName), idiaa, pagingOptions));
    }

    public List<ParentsSubjectStructureRtnType> parentsSubjectStructure(Integer ida, PagingOptions pagingOptions) {
        return ((List<ParentsSubjectStructureRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.parentsSubjectStructureQueryName), ida, pagingOptions));
    }

    public List<PersonaGetInfoRtnType> personaGetInfo(String username, PagingOptions pagingOptions) {
        return ((List<PersonaGetInfoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.personaGetInfoQueryName), username, pagingOptions));
    }

    public List<ReturExitsValueRtnType> returExitsValue(String user, PagingOptions pagingOptions) {
        return ((List<ReturExitsValueRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.returExitsValueQueryName), user, pagingOptions));
    }

    public List<ReturnExistsValueGrupoFamiliarRtnType> returnExistsValueGrupoFamiliar(Integer idg, PagingOptions pagingOptions) {
        return ((List<ReturnExistsValueGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.returnExistsValueGrupoFamiliarQueryName), idg, pagingOptions));
    }

    public List<ShowInformationUserRtnType> showInformationUser(String user, PagingOptions pagingOptions) {
        return ((List<ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.showInformationUserQueryName), user, pagingOptions));
    }

    public List<StudentSujectActivitiesRtnType> studentSujectActivities(Integer idp, Integer idsy, PagingOptions pagingOptions) {
        return ((List<StudentSujectActivitiesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.studentSujectActivitiesQueryName), idp, idsy, pagingOptions));
    }

    public com.aprendoz_desarrollo.data.output.TrackingPersonasRtnType trackingPersonas(String usuario, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollo.data.output.TrackingPersonasRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.TrackingPersonasRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.trackingPersonasQueryName), usuario, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateDatosPersona(Byte pbool, Integer idp, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateDatosPersonaQueryName), pbool, idp, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateInscPersonaGrupoFamiliar(Boolean responsable, Integer idipgf, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateInscPersonaGrupoFamiliarQueryName), responsable, idipgf, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updatePasswordProfile(String pclave, Integer piduser, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updatePasswordProfileQueryName), pclave, piduser, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateServicios(Integer idiac, Boolean inscribir, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateServiciosQueryName), idiac, inscribir, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
