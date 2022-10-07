import { useState } from "react"

import data from "./data"

import { PickChoice } from "./types"

import Pick from "./Pick"

const compareAlphabetically = (a: PickChoice, b: PickChoice) => {
  if (a.label < b.label) {
    return -1
  }
  if (a.label > b.label) {
    return 1
  }
  return 0
}

data.sort(compareAlphabetically)

function App() {
  const [idManifold, updateValueManifold] = useState<PickChoice[]>([data[0]])

  const [idSingle, updateValueSingle] = useState<PickChoice | undefined>(
    data[0]
  )

  return (
    <>
      <div className="Root__header">
        <h1>Pasqal interviews</h1>
        <h1>Multiselect</h1>
      </div>

      <Pick
        data={data}
        id={idSingle}
        onChange={(item) => updateValueSingle(item)}
      />
      <br />
      <Pick
        data={data}
        id={idManifold}
        onChange={(item) => updateValueManifold(item)}
        manifold
      />
    </>
  )
}

export default App
