import "./Question.css"

function questionButtonEvent() {

    alert("Button pressed");

}

function Question({question}) {

    return (
        <div className="Question"> 
            <h2 className="QuestionText">{question}</h2>
            <div className="QuestionButtonRow">
                
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton" onClick={questionButtonEvent}> </button>
                    <p className="QuestionButtonText">Strongly Disagree</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton" onClick={questionButtonEvent}> </button>
                    <p className="QuestionButtonText">Disagree</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton" onClick={questionButtonEvent}> </button>
                    <p className="QuestionButtonText">Neutral</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton" onClick={questionButtonEvent}> </button>
                    <p className="QuestionButtonText">Agree</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton" onClick={questionButtonEvent}> </button>
                    <p className="QuestionButtonText">Strongly Agree</p>
                </div>
            </div>
        </div>
    );
}



export default Question