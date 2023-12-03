import "./HeaderMsg.css"
import questionList from "../data/questionList";

function HeaderMsg() {


    return (
      <div className="HeaderText content"> 
        Welcome to Global Talent Lab's Career Questionnaire.<br />
        Take the next 15 minutes to answer the {questionList.length} questions to be matched with potential careers!
      </div>
    );

}

export default HeaderMsg; 