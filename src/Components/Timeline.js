import React from "react"
import { Chrono } from "react-chrono";

const Home = () => {
    const items = [{
        title: "1330",
        cardTitle: "Main Stage",
        cardSubtitle: "Black Debbath",

    },{
        title: "1355",
        cardTitle: "Scream Stage",
        cardSubtitle: "Death To All",

    },{
        title: "1450",
        cardTitle: "Main Stage",
        cardSubtitle: "Bullet For My Valentine",

    },{
        title: "1545",
        cardTitle: "Scream Stage",
        cardSubtitle: "Enslaved",

    },{
        title: "1640",
        cardTitle: "Main Stage",
        cardSubtitle: "Europe",

    },{
        title: "1745",
        cardTitle: "Scream Stage",
        cardSubtitle: "Baroness",

    },{
        title: "1840",
        cardTitle: "Main Stage",
        cardSubtitle: "Mastodon",

    },{
        title: "1945",
        cardTitle: "Scream Stage",
        cardSubtitle: "Sum 41",

    },{
        title: "2100",
        cardTitle: "Main Stage",
        cardSubtitle: "Iron Maiden",

    },
        ];

    return (
        <div style={{ width: "320px", height: "400px",}}>
            <Chrono items={items}
                    cardHeight={100}
                    theme={{
                        primary: 'black',
                        secondary: '#94C9CA',
                        cardBgColor: '#E3E3E3',
                        cardForeColor: '#E83300',
                        titleColor: 'black',
                    }}

                    fontSizes={{
                        cardTitle: '16px',
            }}
            />
        </div>
    )
}

export default Home;