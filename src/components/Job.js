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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in feugiat lectus. In vitae justo in tortor molestie vestibulum. Vivamus bibendum massa vitae sapien porttitor, nec sollicitudin turpis varius. In feugiat ac quam in tristique. Donec facilisis nisl odio, et malesuada nibh fringilla non. Curabitur ligula sapien, pharetra id vestibulum ac, condimentum nec diam. Integer purus nisi, finibus nec velit nec, sagittis pretium elit. </p>
                <ul>
                    {job.nextSteps.map((step, key) => <li key={key}>{step}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Job;