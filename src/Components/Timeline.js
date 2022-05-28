import React from "react"
import { Chrono } from "react-chrono";

const Home = () => {
    const items = [{
        title: "Main Stage",
        cardTitle: "Iron Maiden",

    },
        ];

    return (
        <div style={{ width: "320px", height: "400px",}}>
            <Chrono items={items} cardHeight={100} />
        </div>
    )
}

export default Home;