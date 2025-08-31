import { useState, useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils, Color} from 'three';

const black = new Color('black');
export default function Button(props){
  const ref = useRef();
  const [hovered, setHovered] = useState();
  const [selected, setSelected] = useState(false);
  const colorTo = new Color(0x00ff00);

  useFrame(() => {
    ref.current.rotation.x = hovered ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025) : MathUtils.lerp(ref.current.rotation.x, 0, 0.025);

    ref.current.position.z = selected ? MathUtils.lerp(ref.current.position.z, 0, 0.025) : MathUtils.lerp(ref.current.position.z, -3, 0.025);

    ref.current.material.color.lerp(selected ? colorTo : black, 0.025)
  });
  return (
    <mesh 
      {...props}
      ref={ref} 
      onPointerDown={() => setSelected(!selected)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry/>
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={3.12}
        ior={1.74}
        transmission={1.0}
      />
    </mesh>
  )
}