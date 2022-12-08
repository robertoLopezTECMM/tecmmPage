import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../../src/components/styles/modalAvisos.css'


export const ModalAvisos = () => {

    const [showModal, setShowModal] = useState(true)
  return (
    <Modal
      show={showModal}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{background:'#6D356C'}} >
        <Modal.Title style={{color:'white', textAlign:'center'}} id="contained-modal-title-vcenter">
          ¡Atención aspirantes!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalAvisosMessageContainer ">

            
           
                <img src='https://www.citypng.com/public/uploads/small/11640517742w2jifnkwscju7xpmc2s44ngrysoyxo9a9ieevu38zqwynffovsanywdvp94jcfreaku0ugkt394ky1ddxaz2bg0lokspayuxtgca.png'/>
                <p className='modalAvisosP'>La Fecha para el Examen diagnostico se reprograma para el 08 de febrero del 2023, por lo que deberás dar continuidad a los pasos tal como se marca en la linea del tiempo en la Plataforma MiTecMM.</p>
            
        </div>        
      </Modal.Body>
      <Modal.Footer style={{background:'#6D356C'}}>
        <Button style={{backgroundColor:'#2DA19A'}} variant="primary" onClick={()=>setShowModal(false)}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  )
}
