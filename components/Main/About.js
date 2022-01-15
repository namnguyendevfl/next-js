import React from "react";

export default function About () {
    return (<>
        <h3 className="txt-lg fw-6">About</h3>
        <div>
            <p className="txt-gray-6">
                Hello! I'm Nam, and I'm originally from Vietnam. I am a Thinkful graduate student in the Flex Engineering program graduating in Januray 2022. I have a doctoral degree in Medicine from University of Medicine and Pharmacy in VietNam.
            </p>
            <p className="txt-gray-6">
                Previously, I practiced medicine for a period of time in Vietnam and continued to study medicine when coming the U.S. I took a series of USMLE and applied for a residency program. Sadly, I did not get an interview because I failed one of the exams on the first attempt, and I am an old medical graduate. 
            </p>
            <p className="txt-gray-6">
                Eventhough, I can not make a career in Medicine, the experience in Medicine allowed me to develop my logical thinking, problem solving, decision making, collaboration and conflict resolution skills. I believe these skills can help me be successul as a full stack web Developer 
            </p>
        </div>
        <h3 className="txt-lg fw-6">Skills</h3>
        <p>
            <span className="txt-md fw-5">Front end:</span>
            <span className="txt-gray-6"> JavaScript, ES6, React, React Hooks, HTML5, CSS3, Redux </span>
        </p>
        <p>
            <span className="txt-md fw-5">Back end:</span>
            <span className="txt-gray-6"> Node, Express, PostgreSQL, Knex </span>
        </p>
        <p>
            <span className="txt-md fw-5">Misc.:</span>
            <span className="txt-gray-6"> Mocha, Chai, Git , GitHub, Heroku, Vercel </span>
        </p>
    </>)
}