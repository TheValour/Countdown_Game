import Player from './components/Player.jsx';
import TimerBox from './components/TimerBox.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerBox title="Easy" targetTime={1}/>
        <TimerBox title="Mediam" targetTime={5}/>
        <TimerBox title="Hard" targetTime={13}/>
        <TimerBox title="Pros Only" targetTime={21}/>
      </div>
    </>
  );
}

export default App;
