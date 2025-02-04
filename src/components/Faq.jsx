"use client"

import React from 'react'
import "../styles/Faq.css"
import { useState } from 'react'



export default function Faq() {

    const [faqs, setFaqs] = useState([

        {
            'question': "WHAT IS A HACKATHON",
            'answer': "A hackathon is an event where individuals or teams come together to collaborate intensively on solving real-world problems or building innovative projects within a limited timeframe, typically 24-48 hours. Participants brainstorm, design, and develop solutions using technology, creativity, and teamwork. It's an exciting opportunity to learn, network, and showcase your skills!",
            open: false
        },

        {
            'question': "IS THERE ANY REGISTRATION FEE",
            'answer': "THERE IS NO REGISTRATION FEE",
            open: false
        },
        {
            'question': "HOW MANY MEMBERS CAN BE THERE IN A TEAM",
            'answer': "THERE SHOULD BE 2-4 MEMBERS IN A TEAM",
            open: false
        },
        {
            'question': "IS THE HACKATHON CONDUCTED ONLINE OF OFFLINE",
            'answer': "THE HACKATHON IS CONDUCTED OFFLINE AT COLLEGE OF ENGINEERING TRIVANDRUM",
            open: false
        },
        {
            'question': "IS FOOD AND ACCOMODATION PROVIDED",
            'answer': "FOOD AND ACCOMODATION FOR PARTICPANTS ARE PROVIDED AT THE VENUE",
            open: false
        },
        {
            'question': "WHO CAN PARTICIPATE IN THE HACKATHON",
            'answer': "ANYONE CURRENTLY PERSUING UNDERGRADUATE COURSE IN INDIA CAN PARTICIPATE",
            open: false
        },
      




    ])
    return (
        <div className='faqs'>

            <h3 className='faq_heading'>FREQUENTLY ASKED QUESTIONS</h3>

            <div className="all_faqs">
                {
                    faqs.map((faq, index) => {
                        return (


                            <div className="faq" key={index}>

                                <div className="question_section"

                                    onClick={() => {
                                        let new_faqs = [...faqs]
                                        if (new_faqs[index].open) {
                                            new_faqs[index].open = false
                                        } else {
                                            new_faqs[index].open = true
                                        }
                                        setFaqs(new_faqs)
                                    }}

                                >
                                    <span className="question">{faq.question}</span>
                                    <img src="/faq_arrow.png" alt=""
                                        style={{ transform: (faqs[index].open) ? "rotate(180deg)" : "rotate(0deg)" }}
                                    />
                                </div>
                                <div className="answer_section" style={{
                                    maxHeight: (faqs[index].open) ? "200px" : "0px",
                                    //  height: (faqs[index].open)? "max-content" : "0px" ,
                                    //  padding:(faqs[index].open)? "20px" : "0px" 
                                    //  display:(faqs[index].open)? "flex" : "none" 

                                }}> <h4 className="answer_section_content">{faq.answer}</h4></div>

                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}
