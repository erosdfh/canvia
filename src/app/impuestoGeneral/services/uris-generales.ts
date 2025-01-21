import { environment } from "src/environments/environment";

const { host, path} = environment;

export class UrisGenerales {
    //public static readonly REST01 = host + path+'padron/web/omisos/080000/periodos';
    public static readonly REST01 = './assets/data/data.json';
    public static readonly REST02 = './assets/data/dataN2.json';
    public static readonly REST03 = './assets/data/dataCombo.json';
    public static readonly REST04 = './assets/data/dataN3.json';
    public static readonly REST05= './assets/data/dependencia.json';
    public static readonly RESTNivel1= host+path+'saldoacumulado/consultar';
    public static readonly RESTNivel2= host+path+'saldoacumulado/consultarcuentaruc';
    public static readonly RESTNivel3= host+path+'saldoacumulado/consultarcuentarucperiodo';
    public static readonly RESTObtenerRS= host+'/v1/recaudacion/tributaria/gestionsaldos/obtenerdatoscontribuyente/{numRuc}';

    
}