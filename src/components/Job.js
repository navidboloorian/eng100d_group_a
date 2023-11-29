import './Job.css';
import Arrow from '../assets/arrow.png';
import { useState } from 'react';

const Job = ({job, percentMatch}) => {
    const [collapsed, setCollapsed] = useState(true);
    let jobInfoClassString = "job-info";
    let arrowClassString;
    let percentMatchClassString = "percent-match";

    if(collapsed) {
        jobInfoClassString += " hidden";
        arrowClassString = "collapsed";
    }
    else {
        arrowClassString = "expanded";
    }

    if(percentMatch > 0.75) {
        percentMatchClassString += " high-percentage";
    }
    else if (percentMatch > 0.5) {
        percentMatchClassString += " medium-percentage";
    }
    else {
        percentMatchClassString += " low-percentage";
    }

    return(
        <div className="job-wrapper">
            <div onClick={() => setCollapsed(!collapsed)} className="job-header">
                <img className={arrowClassString} src={Arrow} alt="Exandable arrow" />
                <h2>{job.title} - <span className={percentMatchClassString}>{parseInt(percentMatch * 100)}%</span></h2>
            </div>
            <div className={jobInfoClassString}>
                <p>{job.description}</p>
                <br />
                <p><strong>Next steps and resources:</strong></p>
                <ul>
                    {job.nextStepsText.map((step, key) => <li key={key}><a href={job.nextStepsUrl[key]} rel="noreferrer" target="_blank">{step}</a></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Job;