"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  return(
    <>
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}.
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}