import React from 'react'

import { content } from '@content'

import TableHeader from './TableHeader'

const Table = () => {
  const headerContent = content.table.header

  return (
    <div className="table">
      <TableHeader data={headerContent} />
    </div>
  )
}

export default Table
