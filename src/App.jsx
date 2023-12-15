import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function App() {
  return (
    <div className="scene">
      {/* Canvas is the  React Three Fiber entry Point */}
      <Canvas>
        {/* An Orbit Control allows an user to modify the camera */}
        <OrbitControls />
        {/* ambient light is illumination in all directions */}
        <ambientLight intensity={0.5} />
        {/* directional light is light coming from a direction */}
        <directionalLight color="white" position={[0, 2, 5]} />
        {/* the scene */}
        <Scene />
      </Canvas>
    </div>
  );
}
export default App;



        
        