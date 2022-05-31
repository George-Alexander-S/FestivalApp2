import React from "react";



export default class About extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <div>
                <button id="customItem" className="menu-item text-2xl text-white" onClick={this.handleShowDialog}>About the App
                </button>
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute", width: 200, height: 300, background: "#ffeac2", borderStyle: "double", borderWidth: "10px", borderColor: "#f77f00", borderRadius: "30px" }}
                        open
                        onClick={this.handleShowDialog}
                    >
                        <p className="font-bold">Welcome to the Festival App!
                        </p><br/>
                        <p> All the important functions are available right on the main screen!</p>
                        <br/>
                        <p className="font-bold flex justify-center">&#129304;Enjoy!&#129304;</p>
                    </dialog>
                )}
            </div>
        );
    }
}