

var potencialElectrico=' El potencial eléctrico en un punto, es el trabajo a realizar por unidad de carga para mover dicha carga dentro de un campo electrostático desde el punto de referencia hasta el punto considerado,​ ignorando el componente irrotacional del campo eléctrico.<br><img src="Imagenes/Potencial_por_carga_puntual.PNG" <br> <br>SUPERFICIES EQUIPOTENCIALES <br> Aquellos puntos contiguos donde el valor del potencial eléctrico es el mismo, reciben el nombre de superficie equipotencial. Cada punto de una superficie equipotencial se caracteriza por que: <br> *El campo eléctrico es perpendicular a la superficie en dicho punto y se dirige hacia valores decrecientes de potencial eléctrico <br> *Cada punto solo puede pertenecer a una superficie equipotencial, ya que el potencial eléctrico es un único valor en cada punto';
var capacitanciaMos='La capacitancia se expresa como la relación entre la carga eléctrica de cada conductor y la diferencia de potencial (es decir, tensión) entre ellos. El valor de la capacitancia de un capacitor se mide en faradios (F); denominados así en honor al físico inglés Michael Faraday (1791-1867). <br> CAPACITORES <br> Los capacitores consisten en dos placas de material conductor ubicado entre un aislador de cerámica, película, vidrio u otros materiales, incluso aire. El aislante también se conoce como un dieléctrico y aumenta la capacidad de carga de un capacitor. Usualmente son llamados condensadores en la industria automotriz, marina y aeronáutica. Las placas internas están conectadas a dos terminales externos, que a veces son largos y finos, y se asemejan a diminutas antenas o patas metálicas. Estos terminales se pueden conectar a un circuito. Los capacitores y las baterías almacenan energía. La diferencia es que que las baterías liberan energía poco a poco, los capacitores la descargan rápidamente.<br> <img src="Imagenes/capc.jpg" height=100px width=100px>';

var textoPotencial=document.getElementById("textoMostrarPotencial");
var textoCapacitancia=document.getElementById("textoMostrarCapacitancia");

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