import { TextField } from "@mui/material"
import katex from "katex"
import { useRef, useEffect, useState } from "react"
import { AppLink } from "./AppLink"

export function Mean() {
  const formulaRef = useRef<HTMLDivElement>(null)
  const valuesSumRef = useRef<HTMLDivElement>(null)
  const [values, setValues] = useState<number[]>([])
  const [valuesInput, setValuesInputUnhooked] = useState<string>("")
  const setValuesInput = (input: string) => {
    setValuesInputUnhooked(input)
    const parsedValues = input.split(/[^0-9\\.]/).map((v) => parseFloat(v.trim())).filter((v) => !isNaN(v))
    setValues(parsedValues)
  }

  const mean = {} as { value: number, string: string, rounded: number }
  mean.value = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0
  mean.string = meanToString(mean.value)
  mean.rounded = Math.round(mean.value)

  useEffect(() => {
    if (formulaRef.current) {
      katex.render("Mean = \\frac{\\sum_{i=1}^{n} x_i}{n} = \\frac{x_0 + x_1 + ... +x_n}{n} =", formulaRef.current, {
        throwOnError: false,
      })
    }
  }, [formulaRef])

  useEffect(() => {
    if (valuesSumRef.current) {
      const sumString = values.length > 0 ? values.join(' + ') : '0'
      const valuesSum = values.length > 0 ? values.reduce((a, b) => a + b, 0) : 0
      const mean = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
      const renderString = `\\frac{${sumString}}{${values.length}} = \\frac{${valuesSum}}{${values.length}} = ${mean}`
      katex.render(values.length > 0 ? renderString : '', valuesSumRef.current, {
        throwOnError: false,
      })
    }
  }, [values, valuesSumRef])
  
  

  return <>
    <AppLink href="/">Back</AppLink>
    <h1>Mean Calculator</h1>

    <p>The Mean is <BlueBold>{mean.string}</BlueBold> or about <BlueBold>{mean.rounded}</BlueBold></p>
    <h5>Enter Values</h5>
    <TextField
      size="small"
      variant="outlined"
      multiline
      rows={4}
      value={valuesInput}
      onChange={(e) => setValuesInput(e.target.value)}
    />
    <h5>({values.join(', ')})</h5>
    <p ref={formulaRef}></p>
    <p ref={valuesSumRef}></p>
    <h3>Explanation</h3>
    <p>The mean is a <i>measure of center</i>, or a way to find the <i>typical</i> value in a set of numbers.</p>
  </>
}

const BlueBold = ({ children }: { children: React.ReactNode }) => <b style={{ color: '#3182ce' }}>{children}</b>

function meanToString(num: number) {
  const MAX_DECIMAL_PLACES = 5

  const isDecimalTooLong = [num]
    .map(a => a % 1) // Decimal Portion
    .map(a => a.toString().split('.').at(1) ?? '') // As String
    .map(a => a.length > MAX_DECIMAL_PLACES)[0] // Check for length

  return num.toLocaleString('en-US', { maximumFractionDigits: MAX_DECIMAL_PLACES }) + (isDecimalTooLong ? '...' : '')
}