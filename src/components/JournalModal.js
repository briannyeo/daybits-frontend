import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function JournalModal(props) {
  const { arrTitle, arrJournalBody, arrUser, arrJournalId } = props;
  console.log("modalArrayTitle", arrTitle);
  return (
    <>
      <Modal
        {...props}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.arrTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.arrJournalBody}</Modal.Body>
      </Modal>
    </>
  );
}

export default JournalModal;
