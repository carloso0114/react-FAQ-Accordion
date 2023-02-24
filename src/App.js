import Question from "./Question";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Sure it its."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "999 $ USD"
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Colombia"
  }
];
