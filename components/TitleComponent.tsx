import { getDeviceSize } from '@/utils/Global';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const TitleComponent = (
    { children, className }: { children: React.ReactNode, className?: string }
) => {
    return (
        <Tilt
            className={className}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.45}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            transitionSpeed={3000}
            perspective={1000}
            tiltEnable={getDeviceSize() === 'xm' ? false : getDeviceSize() === 'sm' ? false : true}
            tiltReverse={false}
            reset={true}
            glareColor={'#334155'}
        >
            {children}
        </Tilt>
    )
}

export default TitleComponent