import React from 'react'
import Lottie from "lottie-react";
import animationData1 from "@/public/lotties/Animation-1719911143346.json";
import animationData2 from "@/public/lotties/Animation-1719911145109.json";
import animationData3 from "@/public/lotties/Animation-1719911147150.json";
import animationData4 from "@/public/lotties/Animation-1719911164493.json";
import animationData5 from "@/public/lotties/Animation-1720105011670.json";

interface PropsType {
    className?: string,
    src: 'anim1' | 'anim2' | 'anim3' | 'anim4' | 'anim5'
}

const DynamicLottieComponent = (props: PropsType) => {
    return (
        <Lottie
            className={`
                h-auto hover:scale-105 hover:brightness-110 active:brightness-90 active:scale-95 cursor-pointer transition-all duration-300
                ${props.className ? props.className : 'w-full sm:w-2/3 md:w-1/2 mb-4'}
            `}
            animationData={props.src === 'anim1' ? animationData1 : props.src === 'anim2' ? animationData2 : props.src === 'anim3' ? animationData3 : props.src === 'anim4' ? animationData4 : animationData5}
            loop={true}
        />
    )
}

export default DynamicLottieComponent