import React from "react";
import {HiSpeakerphone} from "react-icons/hi";
import {AiOutlineSound} from "react-icons/ai";
import {AiTwotoneSound} from "react-icons/ai";
import {BsInfoCircleFill} from "react-icons/bs";



export default class AnnouncementMain extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <div>
                <button className="text-2xl py-2.5 pr-4 pl-4 rounded-2xl border-amber-500 border-2 hover:bg-amber-200" onClick={this.handleShowDialog}><BsInfoCircleFill className="text-amber-600"/>
                </button>
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute", width: 330, height: 470, background: "#ffeac2", borderStyle: "double", borderWidth: "10px", borderColor: "#f77f00", borderRadius: "30px" }}
                        open
                        onClick={this.handleShowDialog}
                    >
                        <h1 className="text-center text-3xl">Welcome to the Festival!</h1>
                        <br/>
                        <h2 className="text-2xl font-bold mb-2">Wristbands!</h2>
                        <p>Remember to pick up your wristbands before leaving the festival area!</p>
                        <br/>
                        <h2 className="text-2xl font-bold mb-2">Check the weather!</h2>
                        <p>Forecasts indicate we are blessed by the weather gods! Nevertheless, always check the weather for each day, just in case!</p>
                        <br/>
                        <p className="font-bold flex justify-center">&#129304;Enjoy!&#129304;</p>
                    </dialog>
                )}
            </div>
        );
    }
}