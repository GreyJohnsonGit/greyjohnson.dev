import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

export function DataTable({ data }: { data: React.ReactNode[][] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {data[0].map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.slice(1).map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}