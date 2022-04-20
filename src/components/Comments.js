import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Comments = (props) => {
  const { comment, author, dateCommented } = props;

  return (
    <Card className="text-center">
      <Card.Header>{author}</Card.Header>
      <Card.Body>
        <Card.Text>{comment}</Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{dateCommented}</Card.Footer>
    </Card>
  );
};

export default Comments;
