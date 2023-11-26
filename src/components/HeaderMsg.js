import "./HeaderMsg.css"
import jobList from "../data/jobList";

function HeaderMsg() {


    return (
      <h1 className="HeaderText content"> 
        Welcome to Global Talent Network’s Career Questionnaire.<br />
        Take the next 15 minutes to answer the {jobList.length} questions to be matched with potential careers!
      </h1>
    );

}

export default HeaderMsg; 