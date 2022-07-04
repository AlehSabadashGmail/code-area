import { ReactNode } from 'react'

export interface VirtualType {
  rowHeight: number
  data: Array<ReactNode>
  height: string
  visibleElements: number
}
