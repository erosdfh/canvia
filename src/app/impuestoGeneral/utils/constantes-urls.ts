import { environment } from '../../../environments/environment';
const { host, path } = environment;

export class ConstantesUrls {
  public static readonly CONSULTAR_CONTRIBUYENTE =
    host + path + 'obtenerdatoscontribuyente/{numRuc}';
  public static readonly CONSULTAR_PARAMETRIA =
    host +
    path +
    'consultasaldoacumulado/parametria/consultar?codParametro={codParametro}&idComponente={idComponente}&codTipoRenta={codTipoRenta}&indUsuario={indUsuario}';
  public static readonly CONSULTAR_EVENTOS =
    host + path + 'consultaevento/contribuyente/consultareventosanteriores';
  public static readonly EXPORTAR_ARCHIVO =
    host +
    path +
    'reportesaldoacumulado/saldoacumulado/generararchivoaexportareventosanteriores';
  public static readonly CONSULTA_N1 =
    host + path + 'consultasaldoacumulado/saldoacumulado/consultar';
  public static readonly CONSULTA_N2 =
    host + path + 'consultasaldoacumulado/saldoacumulado/consultarcuentaruc';
  public static readonly CONSULTA_N3 =
    host +
    path +
    'consultasaldoacumulado/saldoacumulado/consultarcuentarucperiodo';
  public static readonly CONSULTA_N4 =
    host +
    path +
    'consultasaldoacumulado/saldoacumulado/consultarcuentarucperiododetalle';
  public static readonly GEN_REPORTEN1 =
    host +
    path +
    'reportesaldoacumulado/saldoacumulado/generararchivoaexportarNivel1';
  public static readonly GEN_REPORTEN2 =
    host + path + 'reportesaldoacumulado/saldoacumulado/exportarcuentaruc';
  public static readonly GEN_REPORTEN3 =
    host +
    path +
    'reportesaldoacumulado/saldoacumulado/exportarcuentarucperiodo';
  public static readonly GEN_REPORTEN4 =
    host +
    path +
    '/reportesaldoacumulado/saldoacumulado/exportarcuentarucperiododetalle';
  public static readonly ENVIAR_EMAIL =
    host + path + 'contactcenter/renta/enviarcorreo';
  public static readonly CONSOLIDADO =
    host + path + 'reportesaldoacumulado/saldoacumulado/exportarconsolidado';
}
