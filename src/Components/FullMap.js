import React from "react";
import {FiMap} from "react-icons/fi";
import bilde from "./festmap.png";



export default class FullMap extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleShowDialog} className="bg-green-600 hover:bg-green-500 text-5xl text-white py-2.5 pr-4 pl-4 rounded-3xl border-green-800 border-2"><FiMap/>
                </button>
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute", width: 800 }}
                        open
                        onClick={this.handleShowDialog}
                    >
                        <img
                            src={bilde} width={800} height={600}
                            className="image"
                            onClick={this.handleShowDialog}
                            alt="Image not available"
                        />
                    </dialog>
                )}
            </div>
        );
    }
}
