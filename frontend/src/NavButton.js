import "./NavButton.css"

function NavButton({label, side}) {

    if (side.localeCompare("LEFT") === 0) 
    return (

        <button style={{float:"left"}} className="NavButton">{label}</button>
    );

    else if (side.localeCompare("RIGHT") === 0)
    return (

        <button style={{float:"right"}} className="NavButton">{label}</button>
    );
}

export default NavButton; 