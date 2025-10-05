import Videoplayer from "oxideplayer";
import 'oxideplayer/style.css';


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <h1>Oxide Player Demo</h1>
      <div style={{ width: '50vw' }}>
        <Videoplayer videoSrc="https://oxideplayer.s3.us-east-1.amazonaws.com/4ksongtestvideo.mp4  " showProcessingSnackbar={false} />
      </div>
    </div>
  )
}

export default App
