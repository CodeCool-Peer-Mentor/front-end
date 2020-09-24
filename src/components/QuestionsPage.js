import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import QuestionPreview from "./QuestionPreview";
import {
  Alert,
  Container,
  Col,
  Button,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import AddNewQuestionModal from "./AddNewQuestionModal";

const QuestionsPage = (props) => {
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {}, []);

  const addQuestion = () => {
    //send request
  };

  return (
    <Container>
      <AddNewQuestionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        sendQuestion={addQuestion}
      />
      <h1 className="commonText">NAVBAR</h1>
      <Container>
        <Row>
          <Col>
            <h3 className="commonText">Filter</h3>
          </Col>
          <Col>
            <h3 className="commonText">Search bar</h3>
          </Col>
          <Col>
            <Button
              className="commonText"
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
            >
              Add new question
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="questionsBox">
          {/* Display questions here as shown below */}
          <QuestionPreview />
          <QuestionPreview />
          <QuestionPreview />
          <QuestionPreview />
          <QuestionPreview />
        </div>
      </Container>
    </Container>
  );
};

export default QuestionsPage;