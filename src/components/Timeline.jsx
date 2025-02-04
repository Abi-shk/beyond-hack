import React from 'react'
import "../styles/timeline.css"

const events = [
    [1, "Web Development Workshop", "To Be Announced", "To Be Announced"],
    [2, "AI and Machine Learning Introduction", "To Be Announced", "To Be Announced"],
    [3, "Cybersecurity Bootcamp", "To Be Announced", "To Be Announced"],
    [4, "Blockchain Basics", "To Be Announced", "To Be Announced"],
    [5, "App Development Hackathon", "To Be Announced", "To Be Announced"],
    [6, "Prompt Engineering Workshop", "To Be Announced", "To Be Announced"],
    [7, "Arduino Hackathon", "To Be Announced", "To Be Announced"],
    [8, "Hackathon Starts", "Mar 07 2025", "To Be Announced"],
    [9, "Hackathon Ends", "Mar 09 2025", "To Be Announced"],
];

export default function Timeline() {
    return (
        <div className='timeline'>
            <h1 className='timeline_heading'>TIMELINE</h1>

            <video className="timeline_video" autoPlay loop muted>
                <source src="/timeline.mp4" type="video/mp4" />
            </video>

            <div className="center_line"></div>

            <div className="timeline_blocks">
                {
                    events.map((event, index) => {
                        return (
                            <div key={index} className={`event_container ${index % 2 === 1 ? "right" : "left"}`}>
                                <div className="event">
                                    <div className={`bottom_circle ${index % 2 === 1 ? "bottom_circle_right" : "bottom_circle_left"}`}></div>

                                    <div className={`event_content ${index % 2 === 1 ? "event_content_left" : "event_content_right"}`}>
                                        <span className="event_time">{event[2]}</span>
                                        <span className="event_title">{event[1]}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}










// import React from 'react'
// import "../styles/timeline.css"

// const events = [
//     [1, "Web Development Workshop", "To Be Announced", "To Be Announced"],
//     [2, "AI and Machine Learning Introduction", "To Be Announced", "To Be Announced"],
//     [3, "Cybersecurity Bootcamp", "To Be Announced", "To Be Announced"],
//     [4, "Blockchain Basics", "To Be Announced", "To Be Announced"],
//     [5, "App Development Hackathon", "To Be Announced", "To Be Announced"],
//     [6, "Prompt Engineering Workshop", "To Be Announced", "To Be Announced"],
//     [7, "Arduino Hackathon", "To Be Announced", "To Be Announced"],
//     [8, "Hackathon Starts", "Mar 07 2025", "To Be Announced"],
//     [9, "Hackathon Ends", "Mar 09 2025", "To Be Announced"],
// ];

// export default function Timeline() {
//     return (
//         <div className='timeline'>


//             <h1 className='timeline_heading'>TIMELINE</h1>

//             <video
//                 className="timeline_video"
//                 autoPlay
//                 loop
//                 muted
//             >
//                 <source src="/timeline.mp4" type="video/mp4" />
//             </video>

//             <div className="center_line"></div>

//             <div className="timeline_blocks">
//                 {
//                     events.map((event, index) => {
//                         return (


//                             <div key={index} className={`event_container ${((index % 2 === 1) ? "right" : "")}`}>

//                                 <div className={`event `} >

//                                     <div className={`bottom_circle ${((index % 2 === 1) ? "bottom_circle_right" : "")}`}></div>

//                                     <div className={`event_content ${((index % 2 === 1) ? "evnet_content_left" : "")}`}>

//                                         <span className="event_time">{event[2]}</span>
//                                         <span className="event_title">  {event[1]}</span>

//                                     </div>

//                                 </div>

//                             </div>

//                         )
//                     })
//                 }

//             </div>

//         </div>
//     )
// }
