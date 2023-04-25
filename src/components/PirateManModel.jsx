import React from 'react';
import { useGLTF } from '@react-three/drei';

const PirateMan = () => {
    const { nodes, materials } = useGLTF('./src/models/montana1.glb');
  
    return (
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['pirate-man'].geometry}
          material={materials['pirate-man-material']}
        />
      </group>
    );
  };

  export default PirateMan;