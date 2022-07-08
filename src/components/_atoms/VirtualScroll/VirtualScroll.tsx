import React, { useRef, useState, useEffect, ReactNode } from 'react'
import { VirtualType } from './VirtualScroll.d'
import './VirtualScroll.scss'

export const VirtualScroll = ({
  rowHeight,
  data,
  height,
  visibleElements,
}: VirtualType) => {
  const [start, setStart] = useState(0)
  const rootRef = useRef<HTMLDivElement>(document.createElement('div'))
  const startHeight = Math.max(0, Math.floor(start / rowHeight))
  const colsRepeat =
    window.innerWidth > 1080 ? 3 : window.innerWidth > 720 ? 2 : 1

  useEffect(() => {
    const onScroll = () => {
      setStart(rootRef.current.scrollTop)
    }
    rootRef.current.addEventListener('scroll', onScroll)
    return () => {
      rootRef.current.removeEventListener('scroll', onScroll)
    }
  }, [])

  const styles = {
    gridColumns: {
      transform: `${startHeight * rowHeight}`,
      gridTemplateColumns: `repeat(${colsRepeat}, 450px)`,
    },
    mainHeight: {
      height: height,
      overflowY: 'scroll' as const,
    },
    emptyRow: {
      height: rowHeight,
    },
  }

  return (
    <div ref={rootRef} style={styles.mainHeight}>
      <div>
        <div className="grid" style={styles.gridColumns}>
          {data.map((item: ReactNode, index: number) => {
            if (
              index >= startHeight * colsRepeat &&
              index < startHeight * colsRepeat + visibleElements + colsRepeat
            ) {
              return item
            } else {
              return <div style={styles.emptyRow} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
