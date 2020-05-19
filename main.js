

var potencialElectrico=' El potencial eléctrico en un punto, es el trabajo a realizar por unidad de carga para mover dicha carga dentro de un campo electrostático desde el punto de referencia hasta el punto considerado,​ ignorando el componente irrotacional del campo eléctrico.<br><img src="Imagenes/Potencial_por_carga_puntual.PNG" <br> <br>SUPERFICIES EQUIPOTENCIALES <br> Aquellos puntos contiguos donde el valor del potencial eléctrico es el mismo, reciben el nombre de superficie equipotencial. Cada punto de una superficie equipotencial se caracteriza por que: <br> *El campo eléctrico es perpendicular a la superficie en dicho punto y se dirige hacia valores decrecientes de potencial eléctrico <br> *Cada punto solo puede pertenecer a una superficie equipotencial, ya que el potencial eléctrico es un único valor en cada punto';
var capacitanciaMos='La capacitancia se expresa como la relación entre la carga eléctrica de cada conductor y la diferencia de potencial (es decir, tensión) entre ellos. El valor de la capacitancia de un capacitor se mide en faradios (F); denominados así en honor al físico inglés Michael Faraday (1791-1867). <br> CAPACITORES <br> Los capacitores consisten en dos placas de material conductor ubicado entre un aislador de cerámica, película, vidrio u otros materiales, incluso aire. El aislante también se conoce como un dieléctrico y aumenta la capacidad de carga de un capacitor. Usualmente son llamados condensadores en la industria automotriz, marina y aeronáutica. Las placas internas están conectadas a dos terminales externos, que a veces son largos y finos, y se asemejan a diminutas antenas o patas metálicas. Estos terminales se pueden conectar a un circuito. Los capacitores y las baterías almacenan energía. La diferencia es que que las baterías liberan energía poco a poco, los capacitores la descargan rápidamente.<br> <img src="Imagenes/capc.jpg" height=100px width=100px>';

var textoPotencial=document.getElementById("textoMostrarPotencial");
var textoCapacitancia=document.getElementById("textoMostrarCapacitancia");

var carga;
var trabajoP;
var diferenciaPo;
var EnergiaPotencial;
var distancia=parseFloat(document.getElementById('distanciaP').value);


var K;

K=(9)*(Math.pow(10,9))


var cargaMostrar=document.getElementById("cargaPot");

function Mostrar()
{
    if(document.getElementById("caja").style.opacity == 1){
        document.getElementById("caja").style.opacity="0";
        textoPotencial.innerHTML=''
       
        
    }else{
        document.getElementById("caja").style.opacity="1";
        textoPotencial.innerHTML=potencialElectrico
     
    }

}

function MostrarCapacitancia()
{
    if(document.getElementById("cajaCap").style.opacity == 1){
        document.getElementById("cajaCap").style.opacity="0";
        textoCapacitancia.innerHTML=''
        
    }else{
        document.getElementById("cajaCap").style.opacity="1";
        textoCapacitancia.innerHTML=capacitanciaMos
    }

}

/////////////////////////////////MOSTRAR CARGA/////////////////////////////////////////

function mostrarCarga(){
    verificarElevados();
    var  formulaShow;
    var formulaPotencia;
    var NformulaPotencia;
    var formulaPotenciaDist;

    if(trabajoP>0 && diferenciaPo>0){
        formulaShow=parseFloat(formulaCarga(trabajoP,diferenciaPo)) ;
        document.getElementById('cargaPot').value=formulaShow;

    }else if(trabajoP>0 && carga>0){
        formulaPotencia=parseFloat(formulaPotencial(trabajoP,carga));
        document.getElementById('diferenciaPotencial').value=formulaPotencia;
    }else if(EnergiaPotencial>0 && carga>0){
       NformulaPotencia=parseFloat(formulaPotencialEnergia(EnergiaPotencial,carga));
        document.getElementById('diferenciaPotencial').value=NformulaPotencia;
    }else if(distancia>0 && carga>0){
formulaPotenciaDist=parseFloat(formulaPotencialDistancial(distancia,carga));
document.getElementById('diferenciaPotencial').value=formulaPotenciaDist;

}

    

  
location.reload();

}

///////////////////////////////////////FORMULA POTENCIAL//////////////////////////////////////////////

function formulaPotencial(trabajo,cargar)
{
   
        var resultado=trabajo/cargar
        return resultado
  
    
}

//////////////FORMULA POTENCIAL CON ENERGIA POTENCIAL Y CARGA/////////////////////////////////////////
function formulaPotencialEnergia(energiaP,cargar)
{
   
        var resultado=energiaP/cargar
        return resultado
  
    
}

/////////////////////////////FORMULA POTENCIAL CON DISTANCIA//////////////////////////////////////
function formulaPotencialDistancial(dist,cargar)
{
   var mul=K*cargar
        var resultado=mul/dist
        return resultado

    
}

//////////////////////////////////////////FORMULA CARGA////////////////////////////////////////////////

function formulaCarga(trabajo,diferenciaPot)
{
   
        var resultado =trabajo/diferenciaPot
        return resultado
    
    
}


////////////////////////////////////////////VERIFICAR ELEVADOS/////////////////////////////////////

function verificarElevados(){
     carga=String(document.getElementById("cargaPot").value) ;
 trabajoP=String(document.getElementById("trabajoPot").value) ;
 diferenciaPo=String(document.getElementById("diferenciaPotencial").value) ;
 EnergiaPotencial=String(document.getElementById("energiaPot").value)

if(trabajoP.includes('10'))
{
var fields=trabajoP.split('x');
var uno=fields[0];
var dos=fields[1];
var cambio= dos.split('^');
var c1=cambio[0];
var c2=cambio[1];
var tot=Math.pow(c1,c2);
trabajoP=uno*tot
}else{trabajoP=parseFloat(document.getElementById("trabajoPot").value);}


if(diferenciaPo.includes('10'))
{
var fielddif=diferenciaPo.split('x');
var uno=fielddif[0];
var dos=fielddif[1];
var cambio= dos.split('^');
var c1=cambio[0];
var c2=cambio[1];
var tot=Math.pow(c1,c2);
diferenciaPo=uno*tot
}else{diferenciaPo=parseFloat(document.getElementById("diferenciaPotencial").value);}

if(carga.includes('10'))
{
var fielddif=carga.split('x');
var uno=fielddif[0];
var dos=fielddif[1];
var cambio= dos.split('^');
var c1=cambio[0];
var c2=cambio[1];
var tot=Math.pow(c1,c2);
carga=uno*tot
console.log(carga);
}else{carga=parseFloat(document.getElementById("cargaPot").value);}

if(EnergiaPotencial.includes('10'))
{
var fielddif=EnergiaPotencial.split('x');
var uno=fielddif[0];
var dos=fielddif[1];
var cambio= dos.split('^');
var c1=cambio[0];
var c2=cambio[1];
var tot=Math.pow(c1,c2);
EnergiaPotencial=uno*tot
}else{EnergiaPotencial=parseFloat(document.getElementById("energiaPot").value);}

}