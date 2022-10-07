type SinglePickProps = {
  manifold?: false
  id?: PickChoice
  onChange: (id: undefined | PickChoice) => void
}

type PickProps = {
  data: PickChoice[]
} & (manifoldPickProps | SinglePickProps)

type PickChoice = {
  id: string | number
  label: string
  parentId?: number | undefined
}

type manifoldPickProps = {
  id: PickChoice[]
  onChange: (id: PickChoice[]) => void
  manifold: true
}

export type { PickChoice, PickProps, SinglePickProps, manifoldPickProps }
