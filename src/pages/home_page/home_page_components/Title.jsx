import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

export default function AnimatedTitle({title}) {
    return (
        <div className="text-5xl font-bold text-slate-100">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(title)
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Get Easy Jobs!")
                        .start();
                }}
            />
        </div>
    );
}
