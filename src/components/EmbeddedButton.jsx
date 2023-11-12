
const EmbeddedButton = ({link, text}) => {
    return (
        <div>
            <button target = "_blank" rel="noreferrer" className="btn btn-primary" href = {link}>{text}</button>
        </div>
        
    );
}
export default EmbeddedButton;