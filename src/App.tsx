// import { Environment, useGLTF } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
// import { Suspense, useRef, useState } from "react";
// import * as THREE from "three";

// function Box({ z }) {
//   const ref = useRef();

//   const { nodes, materials } = useGLTF("/sculpture-transformed.glb");

//   const { viewport, camera } = useThree();
//   const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

//   const [data] = useState({
//     x: THREE.MathUtils.randFloatSpread(10),
//     y: THREE.MathUtils.randFloatSpread(height),
//     rX: Math.random() * Math.PI,
//     rY: Math.random() * Math.PI,
//     rZ: Math.random() * Math.PI,
//   });

//   useFrame((state) => {
//     ref.current.rotation.set(
//       (data.rX += 0.001),
//       (data.rY += 0.0001),
//       (data.rZ += 0.002)
//     );
//     // ref.current.rotation.y += 0.01
//     ref.current.position.set(data.x * width, (data.y += 0.025), z);
//     if (data.y > height / 1.5) {
//       data.y = -height / 1.5;
//     }
//   });

//   return (
//     <mesh
//       ref={ref}
//       geometry={nodes.sculpture_1.geometry}
//       material={materials.skin}
//     />
//   );
// }

// export default function App({ count = 100, depth = 80 }) {
//   return (
//     <Canvas
//       style={{ height: "100vh" }}
//       gl={{ alpha: false }}
//       camera={{ near: 1, far: 110, fov: 30 }}
//     >
//       <color attach="background" args={["#dbd2c3"]} />
//       <ambientLight intensity={1.8} />
//       <spotLight position={[2.6, 0.7, 1]} intensity={20} />
//       <Suspense fallback={null}>
//         <Environment preset="sunset" />
//         {Array.from({ length: count }, (_, i) => (
//           <Box key={i} z={-(i / count) * depth - 20} />
//         ))}

//         <EffectComposer>
//           <DepthOfField
//             target={[0, 0, depth / 2]}
//             focalLength={50}
//             bokehScale={20}
//             height={900}
//           />
//         </EffectComposer>
//       </Suspense>
//     </Canvas>
//   );
// }


import { Suspense, useState } from 'react'
import './styles.css'
import Overlay from './Overlay'
import { FadeIn, LeftMiddle } from './style'

import Bananas from './Bananas'
// Comment the above and uncomment the following to import the WebGL BG lazily for faster loading times
// const Bananas = lazy(() => import('./Bananas'))


export default function App()  {
  const [speed, set] = useState(1)
  return (
    <>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </>
  )
}
