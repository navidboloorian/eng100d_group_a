import './ProgressBar.css';
 
const ProgressBar = ({progress}) => {

    console.log(progress);

    return (
        <div id="bar-wrapper" className="content">
            <div id="bar-background"></div>
            <div id="bar-foreground" style={{width: `${progress * 100}%`}}></div>
            <p>{Math.round(progress * 100) + "%"}</p>
        </div>
    );
}

export default ProgressBar;