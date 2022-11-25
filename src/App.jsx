import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Camera from "./Camera";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[3, 3, 3]} castShadow />
        <Html
          transform
          center
          style={{
            width: "1200px",
            height: "100vh",
            backgroundColor: "transparent",
            display: "grid",
            placeContent: "center",
          }}
        >
          <h1>MOTRI</h1>
          <h2>nahuelbuta mixtape</h2>
        </Html>
        <Camera position={[0, 0, 0]} />
      </Canvas>

      {/*
       */}

       <div className="reproductor">
       <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3005351251/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://motri-cl.bandcamp.com/album/nahuelbuta-mixtape">Nahuelbuta mixtape by Motri</a></iframe>
       <a className="acerca" href="https://www.solo.to/motri">acerca de</a>
      </div>
    </div>
  );
}

export default App;
