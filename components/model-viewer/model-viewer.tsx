import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, PrimitiveProps } from "@react-three/fiber";

type ModelProps = Omit<PrimitiveProps, 'object'>

function Model(props: ModelProps) {
  const { scene } = useGLTF('/ring.glb')
  return <primitive object={scene} {...props} />
}

export function ModelViewer() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Model scale={80}/>
      <Environment preset="studio" />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}