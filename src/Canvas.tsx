import React, { useRef, useEffect } from 'react';
import { createTextSpanFromBounds } from 'typescript';
import gRsierpinski from './Gramatica';



const drawSegmento = (ctx:CanvasRenderingContext2D,segmento:number=100):string=>{
  var initx:number=0;
  var inity:number=0;

  ctx.translate(initx+100, inity+500);
  ctx.lineTo(initx,inity);
  ctx.rotate(300 * Math.PI / 180);
  ctx.lineTo(initx+200,inity);      
  
  ctx.stroke();

  return('1')

}

const rotarI = (ctx:CanvasRenderingContext2D, angulo:number):string=>{
  return(angulo.toString());
}

const rotarD = (ctx:CanvasRenderingContext2D, angulo:number):string=>{
  return(angulo.toString());
}

interface simbolosI{
  [index: string]:()=>string
}



const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  const canvasRef = useRef(null);
  /*
  const draw = (ctx: CanvasRenderingContext2D) => {

    ctx.beginPath()
    
    var initx:number=0;
    var inity:number=0;

    ctx.translate(initx+100, inity+500);
    ctx.lineTo(initx,inity);
    ctx.rotate(300 * Math.PI / 180);
    ctx.lineTo(initx+200,inity);   
    ctx.translate(initx+200, inity);
    ctx.rotate(60 * Math.PI / 180);
    ctx.lineTo(initx+200,inity);   
    ctx.translate(initx+200, inity);
    ctx.rotate(60 * Math.PI / 180);
    ctx.lineTo(initx+200,inity);
    ctx.stroke();


  }
  */

  
  
  useEffect(() => {

    var produccion:string = gRsierpinski(0);

    var canvas:HTMLCanvasElement = canvasRef.current!;
    canvas.width=800;
    canvas.height=800;
    const ctx = canvas.getContext("2d")!;    

    //draw(ctx);
    

    const simbolos:simbolosI = {
      'A' :()=>drawSegmento(ctx,100),
      'B' :()=>drawSegmento(ctx,100),
      '+':()=>rotarI(ctx,-60),//izquierda
      '-':()=>rotarD(ctx,60)//derecha
    }
  
    //for (var i=0; i<produccion.length; i++) {
      var simbolo:string = produccion.charAt(0);
      simbolos[simbolo]();
    //}

  }, [])
  
  return <canvas ref={canvasRef} {...props}/>

}

export default Canvas