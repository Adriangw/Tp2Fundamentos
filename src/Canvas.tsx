import React, { useRef, useEffect } from 'react';
import { createTextSpanFromBounds } from 'typescript';
import gRsierpinski from './Gramatica';

const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  const canvasRef = useRef(null);
  
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

  useEffect(() => {

    console.log(gRsierpinski(2))
    

    var canvas:HTMLCanvasElement = canvasRef.current!;
    canvas.width=800;
    canvas.height=800;
    const ctx = canvas.getContext("2d")!;    

    draw(ctx);

  }, [])
  
  return <canvas ref={canvasRef} {...props}/>

}

export default Canvas