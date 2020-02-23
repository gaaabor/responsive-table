import React from 'react'

import { content } from '@content'

import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = () => {
  const headerContent = content.table.header
  const bodyContent = content.table.body
  const recommendedColumn = content.table.header.items.filter(
    column => column.recommended === true
  )[0].id

  return (
    <div className="table">
      <TableHeader data={headerContent} />
      <TableBody data={bodyContent} recommendedColumn={recommendedColumn} />
    </div>
  )
}

export default Table
