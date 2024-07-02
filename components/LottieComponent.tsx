import React from 'react'
import Lottie from "lottie-react";
import animationData1 from "@/public/lotties/Animation-1719911143346.json";
import animationData2 from "@/public/lotties/Animation-1719911145109.json";
import animationData3 from "@/public/lotties/Animation-1719911147150.json";
import animationData4 from "@/public/lotties/Animation-1719911164493.json";

interface PropsType {
    className?: string,
    src: 'anim1' | 'anim2' | 'anim3' | 'anim4'
}

const LottieComponent = (props: PropsType) => {
    return (
        <Lottie
            className={`
                h-auto hover:scale-105 hover:brightness-110 active:brightness-90 active:scale-95 cursor-pointer transition-all duration-300
                ${props.className ? props.className : 'w-1/2 mb-4'}
            `}
            animationData={props.src === 'anim1' ? animationData1 : props.src === 'anim2' ? animationData2 : props.src === 'anim3' ? animationData3 : animationData4}
            loop={true}
        />
    )
}

export default LottieComponent