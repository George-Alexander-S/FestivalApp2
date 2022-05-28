import React from 'react';

function Modal({closeModal}) {
    return (
        <div>
            <div className="modalContainer">
                <button className="absolute top-0 right-0" onClick={() => closeModal(false)}>X</button>
                <div className="title">
                    <h1 className="text-center text-3xl">Welcome to the party!</h1>
                </div>
                <div className="body text-center">
                    <p>Remember to pick up your wristbands before leaving the festival area!</p>
                </div>
                <div className="footer flex justify-center">
                    <button onClick={() => closeModal(false)} className="border-2 border-white text-lg font-bold" >	&#129304;Ok&#129304;</button>
                    {/*<button className="bg-blue-200">Continue</button>*/}
                </div>
            </div>
        </div>
    );
}


export default Modal;