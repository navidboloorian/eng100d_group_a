import './Question.css';
import QuestionButtonRow from "./QuestionButtonRow";

const Question = ({question, questionIndex}) => {
    return(
        <div className = 'question'>
            <p className='question-text'>{questionIndex + 1}. {question.text}</p>
            <QuestionButtonRow question={question} questionIndex={questionIndex} />
        </div>
    )
}

export default Question;