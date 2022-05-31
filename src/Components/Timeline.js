import React from "react"
import { Chrono } from "react-chrono";
import './Timeline.css';

const Home = () => {
    const items = [{
        title: "1300",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1355",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1450",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1505",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1545",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1615",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1640",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1725",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1745",
        cardTitle: "",
        cardSubtitle: "",

    },{
        title: "1835",
        cardTitle: "",
        cardSubtitle: ``
    },{
        title: "1840",
        cardTitle: "",
        cardSubtitle: ``
    },{
        title: "1945",
        cardTitle: "",
        cardSubtitle: ``
    },{
        title: "2100",
        cardTitle: "",
        cardSubtitle: ``
    }

        ];

    return (
        <div style={{ width: "320px", height: "450px",}}> <p className="text-center font-bold">Tap to close</p>
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
            >
                <div>
                    <h3 id="main">Main Stage</h3>
                    <h2 id="band">Black Debbath</h2>

                </div>
                <div>
                    <h3 id="scream">Shout Stage</h3>
                    <h2 id="band">Death To All</h2>
                    <hr
                        style={{
                            background: '#000000',
                            height: '3px',
                        }}
                    />
                    <h3 id="vampire">Monster Stage</h3>
                    <h2 id="band">Spidergawd</h2>

                </div>
                <div>
                    <h3 id="main">Main Stage</h3>
                    <h2 id="band">Bullet For My Valentine</h2>

                </div>
                <div>
                    <h3 id="vampire">Monster Stage</h3>
                    <h2 id="band">Spiritbox</h2>
                </div>
                <div>
                    <h3 id="scream">Shout Stage</h3>
                    <h2 id="band">Enslaved</h2>
                </div>
                <div>
                    <h3 id="vampire">Monster Stage</h3>
                    <h2 id="band">Fire From The Gods</h2>
                </div>
                <div>
                    <h3 id="main">Main Stage</h3>
                    <h2 id="band">Europe</h2>
                </div>
                <div>
                    <h3 id="vampire">Monster Stage</h3>
                    <h2 id="band">Raised Fist</h2>
                </div>
                <div>
                    <h3 id="scream">Shout Stage</h3>
                    <h2 id="band">Baroness</h2>
                </div>
                <div>
                    <h3 id="vampire">Monster Stage</h3>
                    <h2 id="band">Hedvig Mollestad Trio</h2>
                </div>
                <div>
                    <h3 id="main">Main Stage</h3>
                    <h2 id="band">Mastodon</h2>
                </div>
                <div>
                    <h3 id="vampire">Monster Stage</h3>
                    <h2 id="band">Hypocrisy</h2>
                    <hr
                        style={{
                            background: '#000000',
                            height: '3px',
                        }}
                    />
                    <h3 id="scream">Shout Stage</h3>
                    <h2 id="band">Sum 41</h2>
                </div>
                <div>
                    <h3 id="main">Main Stage</h3>
                    <h2 id="band">Iron Maiden</h2>
                </div>
            </Chrono>
        </div>
    )
}

export default Home;