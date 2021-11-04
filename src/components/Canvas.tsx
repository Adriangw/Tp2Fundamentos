import React, { useRef, useEffect } from 'react';
import gRsierpinski from '../Gramatica';

var width:number=1500;
var height:number=1000;

var initx:number=200;
var inity:number=height-100;


const drawSegmento = (ctx:CanvasRenderingContext2D,segmento:number)=>{
  ctx.lineTo(0,0);
  ctx.lineTo(segmento,0);
  ctx.translate(segmento,0);
}

const drawSegmentoA = (ctx:CanvasRenderingContext2D,segmento:number,x:number,y:number)=>{
  
  ctx.translate(x,y);

  if(x==initx && y==inity){
    ctx.rotate(0 * Math.PI / 180);//cuando empieza con A el angulo es 0°
    drawSegmento(ctx,segmento);
  }else{
    drawSegmento(ctx,segmento);
  }
}

const drawSegmentoB = (ctx:CanvasRenderingContext2D,segmento:number,x:number,y:number,angulo:number)=>{

  ctx.translate(x,y);

  if(x==initx && y==inity){
    ctx.rotate((-angulo) * Math.PI / 180);//cuando empieza con B el angulo es 60°  
    drawSegmento(ctx,segmento);
  }else{
    drawSegmento(ctx,segmento);
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

const Canvas = (props:any) => {

  const canvasRef = useRef(null);  
  var iteraciones:number=props.iteraciones;  
  var segmento:number = props.segmento;//15
  var angulo:number = props.angulo;//60
  var ajuste:number = props.ajuste;

  useEffect(() => {

    var produccion:string = gRsierpinski(iteraciones);
    var canvas:HTMLCanvasElement = canvasRef.current!;

    canvas.width=width;
    canvas.height=height;
    const ctx = canvas.getContext("2d")!;    
    
    if(iteraciones>0){
      segmento=((segmento*ajuste)/Math.pow(2,iteraciones));
    }
  
    ctx.beginPath();
      
    const simbolos:simbolosI = {
      'Ai':()=>drawSegmentoA(ctx,segmento,initx,inity),
      'Bi':()=>drawSegmentoB(ctx,segmento,initx,inity,angulo),
      'A' :()=>drawSegmentoA(ctx,segmento,0,0),
      'B' :()=>drawSegmentoB(ctx,segmento,0,0,angulo),
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

  }, [iteraciones,segmento,angulo,ajuste])

  return <canvas ref={canvasRef} {...props}/>
  
}

export default Canvas