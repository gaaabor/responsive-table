import React from 'react'

import { content } from '@content'

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

const Table = () => {
  const headerContent = content.table.header
  const bodyContent = content.table.body
  const footerContent = content.table.footer
  const recommendedColumn = content.table.header.items.filter(
    column => column.recommended === true
  )[0].id

  return (
    <div className="table">
      <TableHeader data={headerContent} />
      <TableBody data={bodyContent} recommendedColumn={recommendedColumn} />
      <TableFooter data={footerContent} recommendedColumn={recommendedColumn} />
    </div>
  )
}

export default Table
