import "./Popup.css"

function Popup({isOpen,children, close}){
    if(!isOpen) return false;
    return (
        <div className="popup">
            <button onClick={()=>close()}>cancel</button>
            {children}
        </div>
    );
}

export default Popup;