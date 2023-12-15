import { Suit } from "./Suit";
import { Sky } from "@react-three/drei";
function Scene() {
    return (
        <>
            <Sky />
            <Suit position={[0,-1,3]}/>
        </>
    )
}
export default Scene;