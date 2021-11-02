import React, { useRef, useEffect } from 'react';
import { createTextSpanFromBounds } from 'typescript';
import gRsierpinski from './Gramatica';

var width:number=2000;
var height:number=2000;

var initx:number=5;
var inity:number=height-100;

const drawSegmentoA = (ctx:CanvasRenderingContext2D,segmento:number,x:number,y:number)=>{
  
  ctx.translate(x,y);

  if(x==initx && y==inity){
    ctx.rotate(0 * Math.PI / 180);//cuando empieza con A el angulo es 0°
    ctx.lineTo(0,0);
    ctx.lineTo(segmento,0);
    ctx.translate(segmento,0);
  }else{
    ctx.lineTo(0,0);
    ctx.lineTo(segmento,0);
    ctx.translate(segmento,0);
  }

}

const drawSegmentoB = (ctx:CanvasRenderingContext2D,segmento:number,x:number,y:number)=>{

  ctx.translate(x,y);

  if(x==initx && y==inity){
    ctx.rotate((-1*60) * Math.PI / 180);//cuando empieza con B el angulo es 60°  
    ctx.lineTo(0,0);
    ctx.lineTo(segmento,0);
    ctx.translate(segmento,0);
  }else{
    ctx.lineTo(0,0);
    ctx.lineTo(segmento,0);
    ctx.translate(segmento,0);
  }

}

const rotarI = (ctx:CanvasRenderingContext2D, angulo:number)=>{
  ctx.rotate(-angulo * Math.PI / 180);
}

const rotarD = (ctx:CanvasRenderingContext2D, angulo:number)=>{
  ctx.rotate(angulo * Math.PI / 180);
}

interface simbolosI{
  [index: string]:()=>void
}



const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  const canvasRef = useRef(null);
  
  useEffect(() => {

    var iteraciones:number=9;//*********************************************** */
    
    var produccion:string = gRsierpinski(iteraciones);
    var canvas:HTMLCanvasElement = canvasRef.current!;
    var segmento:number = 15;
    var angulo:number = 60;

    canvas.width=width;
    canvas.height=height;
    const ctx = canvas.getContext("2d")!;    
    
    if(iteraciones>0){
      segmento=segmento/iteraciones;
    }
  
    ctx.beginPath();
      
    const simbolos:simbolosI = {
      'Ai':()=>drawSegmentoA(ctx,segmento,initx,inity),
      'Bi':()=>drawSegmentoB(ctx,segmento,initx,inity),
      'A' :()=>drawSegmentoA(ctx,segmento,0,0),
      'B' :()=>drawSegmentoB(ctx,segmento,0,0),
      '+' :()=>rotarI(ctx,angulo),
      '-' :()=>rotarD(ctx,angulo)
    }

    for (var i=0; i<produccion.length; i++) {
      if(i==0){
        if(produccion.charAt(i)=='A'){
          simbolos['Ai']();
        }else{
          simbolos['Bi']();
        }
      }else{
        var simbolo:string = produccion.charAt(i);
        simbolos[simbolo]();
      }       
    }

    ctx.stroke();

  }, [])

  return <canvas ref={canvasRef} {...props}/>

}

export default Canvas