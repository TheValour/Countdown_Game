import React, {useState, useRef} from 'react'

export default function Player() {
  const inputRef = useRef(null);
  const [player, setPlayer] = useState('unknown');

  const onClickHandler = () => {
    setPlayer(inputRef.current.value);
    inputRef.current.value = '';
  };
  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={onClickHandler} >Set Name</button>
      </p>
    </section>
  );
}
