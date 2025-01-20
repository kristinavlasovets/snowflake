import { Suspense, useState } from 'react'
import './styles.css'
import Overlay from './Overlay'
import { FadeIn, LeftMiddle } from './style'

import Bananas from './Bananas'

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
