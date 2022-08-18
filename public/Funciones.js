$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    $('#calcular').on('click',calcular); 
    
    
    DibujarplanoCartesiano();

});

function calcular(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
   clear(ctx, canvas);
    var  width = canvas.width;    //ancho
     var  height = canvas.height;  //alto
   var a =$('#A').val();
   var b=$('#B').val();
   var c=$('#C').val();
   var d=$('#D').val();
   var e=$('#E').val();
   var f=$('#F').val();
   
  ///CResolvemos el Sistema//////////////// 
   var  g=a*e-b*d;
   var x=0;
    var y=0;
    if(g==0)
    {
        if (c*e-b*f==0){
            x="Inf";y="Inf"
           
            console.log('rectas Coincidentes');
            alert("Los Valores Son infinitos ya que ambas rectas son Iguales");
        } else {
            x="NaN";y="NaN"
           console.log('rectas Paralelas');
           alert("No Existe Solucion Ya que ambas rectas son Paralelas");
        }
    }
else{
    x=(c*e-b*f)/g;
    y=(a*f-c*d)/g;
    dibujarPunto(x,y,width,height,ctx);
};
$('#x').val(x);
$('#y').val(y);
////Graficamos///////////////
   dibujarEcuacionLineal(a, b, c, width, height, ctx);
   dibujarEcuacionLineal(d, e, f, width, height, ctx);
}

function clear(cxt, canvas){
    cxt.beginPath();
    cxt.fillStyle = "rgb(255, 255, 255)";
cxt.clearRect(0, 0, canvas.width, canvas.height);
cxt.closePath();
DibujarplanoCartesiano();
}
function DibujarplanoCartesiano(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    //ctx.strokeRect(100,100,100,100);
     var  width = canvas.width;    //ancho
     var  height = canvas.height;  //alto
   
     //HOrizontal////////
    ctx.moveTo(0,height/2);
    ctx.lineTo(width,height/2);
    ctx.stroke();

    //////Vertical///////
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.stroke();

    dibujarNumeros( width, height, ctx);

}

function dibujarNumeros(width, height, ctx){
    ctx.beginPath();
    for (let index = 10; index < width; index= index+10) {
        ctx.moveTo(width/2 -index, height/2 -3);
        ctx.lineTo(width/2 -index, height/2 +3);
        ctx.stroke();

        ctx.moveTo(width/2 +index, height/2 -3);
        ctx.lineTo(width/2 +index, height/2 +3);
        ctx.stroke();
    }
    for (let index = 10; index < height; index= index+10) {
        ctx.moveTo(width/2 -3, height/2 -index);
        ctx.lineTo(width/2 +3, height/2 -index);
        ctx.stroke();

        ctx.moveTo(width/2 -3, height/2 +index);
        ctx.lineTo(width/2 +3, height/2 +index);
        ctx.stroke();
    }

    ctx.closePath();
    }


function dibujarPunto(x,y,width,height,ctx){
    ctx.beginPath();
    ctx.arc(width/2 + x*10, height/2 - y*10, 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function dibujarEcuacionLineal(a, b ,c ,width, height, ctx){
   //// si x vale 0/////////
    var y1 = c/b;
    
     var x1= 0;
//////// si y vale 0 ////////////
   var x2 = c/a;
   var y2=0;
   const esc= 10;
   ytot= (c-width*a)/b;
   xtot=(c-height*b)/a;
   ctx.beginPath();
   if(Math.sign(a)==-1 || Math.sign(b)==-1){


    ctx.moveTo(width/2 + x1 * esc,height/2 -y1* esc);
    ctx.lineTo(width/2+x2* esc, height/2 + y2 );
   ctx.lineTo(width*10, -ytot*10)
   ctx.moveTo(width/2 +x1 * esc,height/2 -y1* esc);
   ctx.lineTo(-xtot*10, height*10);
   
}else{
    
   ctx.moveTo(width/2 +x1 * esc,height/2 -y1* esc);
    ctx.lineTo(width/2 + x2*esc, height/2 + y2*esc); 
    ctx.lineTo(-xtot*10,  height*10); 
    ctx.moveTo(width/2 +x1 * esc,height/2 -y1* esc);
    ctx.lineTo(-width*10, ytot*10); 
  
}
   ctx.stroke();
   ctx.closePath();
  



}

