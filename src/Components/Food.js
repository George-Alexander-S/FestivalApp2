import React from "react";
import {IoIosRestaurant} from "react-icons/io";
import bilde from "./FestivalSpace.png";


export default class Food extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleShowDialog} className="bg-orange-500 hover:bg-orange-400 text-5xl text-white py-2.5 pr-4 pl-4 rounded-3xl border-orange-700 border-2"><IoIosRestaurant/>
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
