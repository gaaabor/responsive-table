import React from 'react'

import TableHeaderItem from './TableHeaderItem'

const TableHeader = ({ data }) => {
  const { heading, items } = data

  return (
    <div className="table-header">
      <div className="table-header__heading-wrapper">
        <h1 className="table-header__heading">{heading}</h1>
      </div>
      <div className="table-header__items">
        {!!items &&
          items.map(item => <TableHeaderItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default TableHeader
