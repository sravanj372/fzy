
import { Suspense } from "react"
import React from "react"
const Adminroutes=React.lazy(()=>import('./adminroutes/Adminroutes'))
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Adminroutes />
    </Suspense>
  )
}

export default App
