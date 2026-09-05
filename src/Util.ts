import type { CSSProperties } from "react"

export function chainLog(message?: string): <T>(value: T) => T {
  return <T>(value: T) => {
    if (message) console.log(message, value)
    else console.log(value)
    return value
  }
}

export const NoPrint = { '@media print': { display: 'none' } } as CSSProperties;