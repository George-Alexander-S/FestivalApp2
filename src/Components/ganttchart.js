import Chart from 'react-google-charts'


const data = [
    [
        { type: "string", id: "Stage" },
        { type: "string", id: "Artist" },
        { type: "string", role: "tooltip", p: {html: true}},
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
    ],
    [
        "Main Stage",
        "Black Debbath",
        "End of this event overlaps with the start of event on Stage 2",
        new Date(2022, 6, 23, 13, 0, 0),
        new Date(2022, 6, 23, 14, 40, 0),

    ],
    [
        "Main Stage",
        "Bullet For My Valentine",
        "This event overlaps with end of Stage 1 event!",
        new Date(2022, 6, 23, 14, 50, 0),
        new Date(2022, 6, 23, 16, 30),
    ],
    [
        "Main Stage",
        "Europe",
        "Enjoy the show!",
        new Date(2022, 6, 23, 16, 40, 0),
        new Date(2022, 6, 23, 18, 30),
    ],
    [
        "Main Stage",
        "Mastodon",
        "Enjoy the show!",
        new Date(2022, 6, 23, 18, 40, 0),
        new Date(2022, 6, 23, 20, 50),
    ],
    [
        "Main Stage",
        "Iron Maiden",
        "Up The Irons!",
        new Date(2022, 6, 23, 21, 0, 0),
        new Date(2022, 6, 23, 23, 59),
    ],
    [
        "Scream Stage",
        "Death To All",
        "",
        new Date(2022, 6, 23, 13, 55, 0),
        new Date(2022, 6, 23, 15, 30),
    ],
    [
        "Scream Stage",
        "Enslaved",
        "",
        new Date(2022, 6, 23, 15, 45, 0),
        new Date(2022, 6, 23, 17, 30),
    ],
    [
        "Scream Stage",
        "Baroness",
        "",
        new Date(2022, 6, 23, 17, 45, 0),
        new Date(2022, 6, 23, 19, 30),
    ],
    [
        "Scream Stage",
        "Sum 41",
        "",
        new Date(2022, 6, 23, 19, 45, 0),
        new Date(2022, 6, 23, 21, 15),
    ],
    [
        "Vampire Stage",
        "Spidergawd",
        "",
        new Date(2022, 6, 23, 13, 55, 0),
        new Date(2022, 6, 23, 14, 50),
    ],
    [
        "Vampire Stage",
        "Spiritbox",
        "",
        new Date(2022, 6, 23, 15, 5, 0),
        new Date(2022, 6, 23, 16, 0),
    ],
    [
        "Vampire Stage",
        "Fire From The Gods",
        "",
        new Date(2022, 6, 23, 16, 15, 0),
        new Date(2022, 6, 23, 17, 15),
    ],
    [
        "Vampire Stage",
        "Raised Fist",
        "",
        new Date(2022, 6, 23, 17, 25, 0),
        new Date(2022, 6, 23, 18, 20),
    ],
    [
        "Vampire Stage",
        "Hedvig Mollestad Trio",
        "",
        new Date(2022, 6, 23, 18, 35, 0),
        new Date(2022, 6, 23, 19, 40),
    ],
    [
        "Vampire Stage",
        "Hypocrisy",
        "",
        new Date(2022, 6, 23, 19, 45, 0),
        new Date(2022, 6, 23, 21, 15),
    ]
];

const options = {
    tooltip: {isHTML : true},
    legend: 'none',

};

function GanttChart () {
        return (
            <div className="">
                <h2 className="text-center text-2xl" id="playtimes">Play times</h2>
                <div id="charten" className="">
                    <Chart className="text-center text-2xl border-r-8 border-t-4 border-l-4 border-b-4 border-slate-300" chartType="Timeline" data={data} width="800px" height="200px" options={options} />
                </div>
            </div>
        )
}
export default GanttChart