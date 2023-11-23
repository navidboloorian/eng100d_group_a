import './QuestionButton.css';

const QuestionButton = ({onClick, label, selected, index}) => {
    let classString = "question-button";

    if(selected) {
        classString += " selected";
    }
    else {
        classString += " unselected";
    }

    if(index === 0 || index === 4) {
        classString += " large";
    }
    else if(index === 1 || index === 3) {
        classString += " medium";
    }
    else {
        classString += " small";
    }

    return (
        <div className='question-button-wrapper'>
            <div className='bounding-box'>
                <button className={classString} onClick={() => onClick(index)}></button>
            </div>
            <p>{label}</p>
        </div>
    )
}

export default QuestionButton;