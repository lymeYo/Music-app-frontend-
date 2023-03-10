type Tfield<T> = T | null

export type TItemState = {
  category: {
    title: Tfield<string>
    subtitle: Tfield<string>
  }
  name: Tfield<string>
  state: Tfield<'new' | 'used'>
}

export const initialItemState: TItemState = {
  category: {
    title: null,
    subtitle: null
  },
  name: null,
  state: null
}
