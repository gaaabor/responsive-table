import React from 'react'

import TableBodyItem from './TableBodyItem'

const TableBody = ({ data, recommendedColumn }) => {
  const { items } = data

  return (
    <div className="table-body">
      {!!items &&
        items.map(item => (
          <TableBodyItem
            key={item.id}
            item={item}
            recommendedColumn={recommendedColumn}
          />
        ))}
    </div>
  )
}

export default TableBody
