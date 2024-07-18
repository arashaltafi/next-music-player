import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ReactFiberComponent from './ReactFiberComponent';

interface PropsType {
    className?: string
}

const ThreeJsComponent = (props: PropsType) => {
    return (
        <div className={`${props.className}`}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ReactFiberComponent path="/3d/headphone_3.glb" />
                <OrbitControls
                    enableZoom={true}
                    minDistance={1}
                    maxDistance={4}
                />
                <ContactShadows />
            </Canvas>
        </div>
    )
}

export default ThreeJsComponent