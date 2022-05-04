import {Environment, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas, PrimitiveProps} from "@react-three/fiber";

type ModelProps = Omit<PrimitiveProps, 'object'>

function Model(props: ModelProps) {
  const { scene } = useGLTF('/dog.glb')
  return <primitive object={scene} {...props} />
}

export function ModelViewer() {
  return (
    <Canvas camera={{ position: [2.5, 2.5, -2.5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <Model position={[-0.1, -0.2, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.15} />
      <Environment preset="studio" />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}