import React from "react";



export default class Announcement extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <div>
                <button id="customItem" className="menu-item text-2xl text-white" onClick={this.handleShowDialog}>Announcements
                </button>
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute", width: 300, height: 500, background: "#ffeac2", borderStyle: "double", borderWidth: "10px", borderColor: "#f77f00", borderRadius: "30px" }}
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
                    </dialog>
                )}
            </div>
        );
    }
}