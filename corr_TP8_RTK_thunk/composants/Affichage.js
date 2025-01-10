import { Button, Modal } from "react-bootstrap";

export default function Affichage({ stg, changerShow }) {
  
  return (
    stg && (
      <div className="text-center">
        <Modal show={true} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>{stg.nom}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <img src="user-icon.png" alt="" width="100px" /> <br />
              Email: {stg.email}
              <br />
              Niveau :
              {stg.niveau === "t" ? "Technicien" : "Technicien spécialisé"}
              <br />
              Téléphone : {stg.tel}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn btn-danger"
              onClick={() => changerShow(false)}
            >
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  );
}
