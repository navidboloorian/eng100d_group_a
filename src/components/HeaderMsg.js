import "./HeaderMsg.css"
import questionList from "../data/questionList";

function HeaderMsg() {


    return (
      <h1 className="HeaderText content"> 
        Welcome to Global Talent Network’s Career Questionnaire.<br />
        Take the next 15 minutes to answer the {questionList.length} questions to be matched with potential careers!
      </h1>
    );

}

export default HeaderMsg; 