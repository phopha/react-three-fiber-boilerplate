import { useRef } from 'react'
export default function Box(props) {
  const ref = useRef({})
  
  console.log(ref)
  // console.log(materialRef)
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={false} />
    </mesh>
  )
}