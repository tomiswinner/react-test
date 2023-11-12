import React, { useState, useEffect } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  console.log("さいしょ")
  const [num, setNum] = useState(7)
  const [showFlag, setShowFlag] = useState(true)
  const onClickCountUp = () => {
    setNum(num + 1)
  }
  const onClickSwitchShowFlag = () => {
    setShowFlag(!showFlag)
  }

  useEffect(() => {
    if (num % 3 === 0) {
      // showFlagがtrueの時は右辺を返す
      showFlag || setShowFlag(true)
    } else {
      // showFlagがfalseの時は右辺を返す
      showFlag && setShowFlag(false)
    }
  }, [num])


  return (
    <>
      <h1 style={{ color: 'red'}}>こんにちは</h1>
      <ColorfulMessage color="blue">
        おげんですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        元気女性
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {showFlag && <p>現れました</p>}
    </>
  )
}

export default App;
