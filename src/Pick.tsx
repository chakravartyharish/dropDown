import React from "react"

import "./Pick.css"

import { PickChoice, PickProps } from "./types"

const Pick = (props: PickProps) => {
  const { data, id, onChange, manifold } = props

  const Ref = React.useRef<HTMLDivElement>(null)

  const [isUnfolded, setIsUnfolded] = React.useState(false)

  const [highlightOption, setHighlightOption] = React.useState(0)

  const isOptionPicked = (choice: PickChoice) => {
    return manifold ? id.includes(choice) : choice === id
  }

  React.useEffect(() => {
    if (isUnfolded) setHighlightOption(0)
  }, [isUnfolded])

  const deletePickedItem = () => {
    if (manifold) {
      onChange([])
    } else onChange(undefined)
  }

  const PickOption = (choice: PickChoice) => {
    if (manifold) {
      if (id.includes(choice)) {
        onChange(id.filter((item) => item !== choice))
      } else {
        onChange([...id, choice])
      }
    } else {
      if (choice !== id) {
        onChange(choice)
      }
    }
  }

  return (
    <div
      onClick={() => setIsUnfolded((x) => !x)}
      className={"box"}
      ref={Ref}
      onBlur={() => setIsUnfolded(false)}
      tabIndex={0}
    >
      <div className={`${"choices"} ${isUnfolded ? "display" : ""}`}>
        {data.map((choice, i) => (
          <div
            key={choice.id}
            className={`${"choice"} ${isOptionPicked(choice) ? "picked" : ""} ${
              i === highlightOption ? "highlighted" : ""
            }`}
            onClick={(event) => {
              event.stopPropagation()
              PickOption(choice)
              setIsUnfolded(false)
            }}
            onMouseEnter={() => setHighlightOption(i)}
          >
            {choice.label}
          </div>
        ))}
      </div>
      <div className={"id"}>
        {manifold
          ? id.map((selectedId) => (
              <button
                className={"choice-pin"}
                key={selectedId.id}
                onClick={(e) => {
                  e.stopPropagation()
                  PickOption(selectedId)
                }}
              >
                {selectedId.label}
                <div className={"delete-button"}>&#215;</div>
              </button>
            ))
          : id?.label}
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation()
          deletePickedItem()
        }}
        className={"erase-button"}
      >
        &#10799;
      </button>
      <div className={"partition"}></div>
      <div className={"asterisk"}></div>
    </div>
  )
}

export default Pick
