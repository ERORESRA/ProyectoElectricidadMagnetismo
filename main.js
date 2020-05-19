

var potencialElectrico=' El potencial eléctrico en un punto, es el trabajo a realizar por unidad de carga para mover dicha carga dentro de un campo electrostático desde el punto de referencia hasta el punto considerado,​ ignorando el componente irrotacional del campo eléctrico.<br><img src="Imagenes/Potencial_por_carga_puntual.PNG" <br> <br>SUPERFICIES EQUIPOTENCIALES <br> Aquellos puntos contiguos donde el valor del potencial eléctrico es el mismo, reciben el nombre de superficie equipotencial. Cada punto de una superficie equipotencial se caracteriza por que: <br> *El campo eléctrico es perpendicular a la superficie en dicho punto y se dirige hacia valores decrecientes de potencial eléctrico <br> *Cada punto solo puede pertenecer a una superficie equipotencial, ya que el potencial eléctrico es un único valor en cada punto';


var textoPotencial=document.getElementById("textoMostrarPotencial")


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