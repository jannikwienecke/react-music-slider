import React from 'react'
import Slider, { useSlider } from '../lib'

const App = () => {
  const [currentMs, setCurrentMs] = React.useState(0)
  const [play, setPlay] = React.useState(false)
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>(
    'idle',
  )

  const onMsChange = (ms: number) => {
    setStatus('loading')
    setTimeout(() => {
      setCurrentMs(ms)
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
      }, 10)
    }, 1000)
  }

  const { state, handleDragStart, handleMsChange, getState } = useSlider({
    currentMsSong: currentMs,
    media: { mediaId: 1, totalMs: 200000 },
    isPlaying: play,
    stateUpdateIntervall: 3000,
    onSettledChange: () => console.log('setteld'),
    onMsChange: onMsChange,
    statusRequestMsChange: status,
  })

  return (
    <div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={() => setPlay(!play)}>TOGGLE PLAY</button>
      <button onClick={() => onMsChange(Math.random() * 200000)}>
        Random Ms
      </button>
      <button onClick={() => console.log(getState())}>GET STATE</button>

      <Slider
        disable={false}
        state={state}
        onChange={handleMsChange}
        onDragStart={handleDragStart}
      />
    </div>
  )
}

export default App
