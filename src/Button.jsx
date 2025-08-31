export default function Button(props){
  return (
    <mesh {...props}>
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