import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface PropsType {
    path: string
}

const ReactFiberComponent = (props: PropsType) => {
    const gltf = useLoader(GLTFLoader, props.path);
    return <primitive object={gltf.scene} />;
}

export default ReactFiberComponent