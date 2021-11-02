import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import Canvas from './Canvas';

const FormInputs = () => { 

  const [texto, setTexto] =  useState('');
  const [palabrasAborrar, setPalabrasAborrar] =  useState('');
  const [archivoData, crearArchivo] = useState('')
  const [resultText, setResultText] =  useState('');



  return (
    
      <div>
         
        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Sierpiński arrowhead curve</Form.Label>  
        </Form.Group>

        <div className="row">
            <div className="col-md-4"> 
            
                <Form.Group className="mb-3" controlId="form">
                <Form.Label>Cantidad de iteraciones</Form.Label>
                <Form.Select aria-label="Default select example">
                    
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
            <div className="col-md-4">
                <Form.Group className="mb-3" controlId="form">
                    <Form.Label>Tamaño de segmento A B</Form.Label>
                <   FormControl aria-label="tamanio segmento" />
                </Form.Group>     
            </div>
            <div className="col-md-4">
                <Form.Group className="mb-3" controlId="form">
                    <Form.Label>Ángulo</Form.Label>
                    <Form.Select aria-label="Default select example">
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
        </div>

        <Form.Group className="col-mb-12" controlId="form">
          <Button variant="success">Dibujar</Button>
        </Form.Group>
        


        <div className="row">
            <div className="col-md-12">
                <Canvas/>
            </div>
        </div>
            
      </div>
    
  );
}

export default FormInputs;