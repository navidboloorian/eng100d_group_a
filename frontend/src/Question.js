import "./Question.css"

function Question({question}) {

    return (
        <div className="Question"> 
            <h2 className="QuestionText">{question}</h2>
            <div className="QuestionButtonRow">
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton"> </button>
                    <p>Strongly Disagree</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton"> </button>
                    <p>Disagree</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton"> </button>
                    <p>Neutral</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton"> </button>
                    <p>Agree</p>
                </div>
                <div className="QuestionButtonColumn"> 
                    <button className="QuestionButton"> </button>
                    <p>Strongly Agree</p>
                </div>

            </div>
        </div>
    );
}

export default Question