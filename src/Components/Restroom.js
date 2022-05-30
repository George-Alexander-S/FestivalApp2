import React from "react";
import {FaRestroom} from "react-icons/fa";
import bilde from "./toilettest.jpeg";


export default class Restroom extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleShowDialog} className="bg-blue-400 hover:bg-blue-300 text-5xl text-white py-2.5 pr-4 pl-4 rounded-3xl border-blue-600 border-2"><FaRestroom/>
                </button>
                {this.state.isOpen && (
                    <dialog
                        className="dialog z-50"
                        style={{ position: "absolute", width: 800 }}
                        open
                        onClick={this.handleShowDialog}
                    ><h1 className="flex text-xl">Press image to close</h1>
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
