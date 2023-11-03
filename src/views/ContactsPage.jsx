import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactsPage() {
  return (
    <>
    <Form className="text-center mt-3">
      <h3 style= {{color:"salmon"}}>CUÉNTANOS ¿En qué podemos ayudarte?</h3>
      <Form.Group className="mb-3" >
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Dejanos tu comentario</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger">Enviar</Button>
    </Form>
    </>
    
  );
}

export default ContactsPage;