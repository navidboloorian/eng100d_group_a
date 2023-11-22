import './App.css';
import HeaderMsg from './HeaderMsg';
import Question from "./Question";
import NavButton from './NavButton';

function App() {
  return (
    <>

        <div className='GridContainer'> 
          <div className="PageIntro"> 
            <HeaderMsg/>
          </div>
          <div className="Question">
            <Question question={"I like css"}/>
            <Question question={"I like variable types"}/>
            <Question question={"I forget to type semicolons"}/>
            <Question question={"Q4"}/>
            <Question question={"Q5"}/>
            <Question question={"Q6"}/>
            <Question question={"Q7"}/>
          </div>
          <div className='BottomNavButtons'> 
            <NavButton label={"BACK"} side={"LEFT"}/>
            <NavButton label={"NEXT"} side={"RIGHT"}/>
          </div>
        </div>
    </>

  );
}

export default App;
