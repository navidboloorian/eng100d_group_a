import './QuestionButtonRow.css';
import QuestionButton from './QuestionButton';
import {useState, useEffect} from 'react';

const QuestionButtonRow = ({question, questionIndex}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

    useEffect(() => {
        setSelectedIndex(JSON.parse(localStorage.getItem('questions'))[questionIndex].response);
    }, [questionIndex]);

    const onClick = (index) => {
        setSelectedIndex(index);
        question.response = selectedIndex;

        const storedQuestions = JSON.parse(localStorage.getItem('questions'));
        storedQuestions[questionIndex].response = index;

        localStorage.setItem('questions', JSON.stringify(storedQuestions));
    }

    return(
        <div className="question-button-row">
            {
                labels.map((label, key) => {
                    if(selectedIndex === key) return <QuestionButton key={key} index={key} selected={true} label={label} onClick={onClick} />
                    else return <QuestionButton key={key} index={key} selected={false} label={label} onClick={onClick} /> 
                })
            }
        </div>
    )
}

export default QuestionButtonRow;