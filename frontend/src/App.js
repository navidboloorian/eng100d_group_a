import logo from './logo.svg';
import './App.css';
import HeaderMsg from './HeaderMsg';
import NextButton from './NextButton';
import Question from "./Question";

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
            <Question/>
          </div>
          <div className='BottomNavButtons'> 
            <NextButton/>
          </div>
        </div>
    </>

  );
}

export default App;
