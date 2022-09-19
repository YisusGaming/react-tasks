import advice from "./css/advice.css";

export default function Advice() {
    return (
        <div className="screen-top advice">
            <div className="advice-content">
                <h1 className="text-light">{"<!>"} Aplicación de prueba!</h1>
                <p>Esta aplicación se desarrollo para practicar JavaScript React.</p>
                <strong>- YisusGaming</strong>
                <button onClick={() => {
                    document.querySelector('.advice').classList.add(['advice-close']);
                }} id="close-advice">X</button>
            </div>
        </div>
    );
}