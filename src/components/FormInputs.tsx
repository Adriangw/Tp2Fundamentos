import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import Canvas from './Canvas';

const FormInputs = () => { 


  const [iteraciones, setIteraciones] = useState(0);
  const [segmento, setSegmento] = useState('100');
  const [angulo, setangulo] = useState(60);
  const [ajuste, setAjuste] = useState(30);

  const [opciones, setOpciones] = useState({iteraciones:iteraciones,segmento:segmento,angulo:angulo,ajuste:ajuste});

  const getIteraciones = (e:any):void => {
    setIteraciones(Number(e.target.value));
  }

  const getSegmento = (e:any):void => {
    setSegmento(e.target.value); 
  }

  const getAngulo=(e:any):void => {
    setangulo(+e.target.value);
  }

  const getAjuste=(e:any):void => {
    setAjuste(Number(e.target.value));
    setOpciones({iteraciones:iteraciones,segmento:segmento,angulo:angulo,ajuste:e.target.value});
  }

  function dibujar (e:any):void{
    
    var segmentoCheck:string='';
    var inputSegmento:any = /^[0-9]+([.][0-9]+)?$/;
    

    if(segmento.match(inputSegmento)){
      segmentoCheck=segmento;
      setOpciones({iteraciones:iteraciones,segmento:segmentoCheck,angulo:angulo,ajuste:ajuste});
    }else{
      alert("El segmento debe ser un número positivo")
    }  
   
    
    
  }

  useEffect(() => {},[opciones])
  return (
       
      <div>
    
        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Sierpiński arrowhead curve</Form.Label>  
        </Form.Group>

        <div className="row">
            <div className="col-md-3"> 
                <Form.Group className="mb-3" controlId="form">
                  <Form.Label>Cantidad de iteraciones</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={getIteraciones}>
                      <option value="-">Iteraciones</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                    
                  </Form.Select>
                </Form.Group>
            </div>
            
            <div className="col-md-3">
                <Form.Group className="mb-3" controlId="form">
                    <Form.Label>Tamaño de segmento A B</Form.Label>
                    <FormControl aria-label="tamanio segmento" onChange={getSegmento}/>
                </Form.Group>     
            </div>
            
            <div className="col-md-3">
                <Form.Group className="mb-3" controlId="form">
                    <Form.Label>Ángulo</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={getAngulo}>
                        <option>Ángulo de rotación de los segmentos</option>
                        <option value="10">10°</option>
                        <option value="20">20°</option>
                        <option value="30">30°</option>
                        <option value="40">40°</option>
                        <option value="50">50°</option>
                        <option value="60">60°</option>
                        <option value="70">70°</option>
                        <option value="80">80°</option>
                        <option value="90">90°</option>
                    </Form.Select>
                </Form.Group>     
            </div>

            <div className="col-md-3"> 
                <Form.Group className="mb-3" controlId="form">
                  <Form.Label>Ajustar</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={getAjuste}>
                      <option value="-">Ajuste</option>
                      <option value="100">100</option>
                      <option value="80">80</option>
                      <option value="60">60</option>
                      <option value="40">40</option>
                      <option value="20">20</option>
                      <option value="5">5</option>
                      <option value="1">1</option>  
                  </Form.Select>
                </Form.Group>
            </div>
        </div>

        

        <Form.Group className="col-mb-12" controlId="form">
          <Button variant="success" onClick={dibujar}>Dibujar</Button>
        </Form.Group>

        <div className="row">
            <div className="col-md-12">
                <Canvas {...opciones}/>
            </div>
        </div>
            
      </div>
    
  );
}

export default FormInputs;