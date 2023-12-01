import Question from './components/Question';
import { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import questionList from './data/questionList';
import jobList from './data/jobList';
import Navbar from './components/Navbar';
import Job from './components/Job';
import HeaderMessage from "./components/HeaderMsg";
import EndHeader from './components/EndHeader';
import ProgressBar from './components/ProgressBar';
import "./components/HeaderMsg.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const numPages = Math.ceil(questionList.length / 4);
  const [quizFinished, setQuizFinished] = useState(false);
  const [jobMatchPercentages, setJobMatchPercentages] = useState([]);

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questionList));
  }, []);

  useEffect(() => {
    if(quizFinished) {
      const jobQuestionCount = {};
      const responses = JSON.parse(localStorage.getItem('questions'));
      const calculations = {};
      const tempJobMatchPercentages = [];

      for(const job of jobList) {
        calculations[job.title] = 0;
        jobQuestionCount[job.title] = 0;
      }

      for(const question of responses) {
        for(const job of question.jobs) {
          calculations[job] += question.response;
          jobQuestionCount[job]++;
        }
      }

      for(const key in calculations) {
        calculations[key] = calculations[key] / (jobQuestionCount[key] * 4);
        tempJobMatchPercentages.push([key, calculations[key]]);
      }

      tempJobMatchPercentages.sort((a, b) => b[1] - a[1]);

      setJobMatchPercentages(tempJobMatchPercentages);
    }

  }, [quizFinished]);

  const resetFunction = () => {
    setQuizFinished(false);
    setCurrentPage(0);
    localStorage.setItem('questions', JSON.stringify(questionList)); 
  }

  return (
    quizFinished ? 
      <>
        <Navbar />
        <EndHeader/>
        <div className='content'>
          <p style={{textAlign: 'center'}}>Based on your answers, you should consider a career in {String(jobMatchPercentages[0]).replace(/[^a-zA-Z ]/g, '')}! </p>
          <p style={{textAlign: 'center'}}>Click on the career title to learn more about the career.</p>
          {
            jobMatchPercentages.map((matchedJob, key) => {
              let job;

              for(const tempJob of jobList) {
                if(tempJob.title === matchedJob[0]) {
                  job = tempJob;
                  break;
                }
              }

              return <Job key={key} job={job} percentMatch={matchedJob[1]} />
            })
          }
          <button id="retake-button" onClick={() => resetFunction()}>Take the Quiz Again</button>
        </div>
      </>
      :
      <>
        <Navbar />
        <HeaderMessage/>
        <ProgressBar progress={currentPage / numPages} />
        <div className='content'>
          {
            questionList
              .slice(currentPage * 4, Math.min(questionList.length, 4 + currentPage * 4))
              .map((question, key) => <Question key={key} question={question} questionIndex={key + 4 * currentPage} />)
          }
          <Pagination numPages={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} setQuizFinished={setQuizFinished} />
        </div>
      </>
  );
}

export default App;
