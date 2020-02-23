import React from 'react'

import Icon from '../Icon'

const TableBodyItem = ({ item, recommendedColumn }) => {
  console.log('item rec', recommendedColumn)

  const AvailabilityItem = ({ value, recommended }) => (
    <div
      className={`availability__item ${
        value
          ? 'availability__item--available'
          : 'availability__item--unavailable'
      } ${
        recommended
          ? 'availability__item--recommended'
          : 'availability__item--plain'
      } `}
    >
      <Icon block="availability" name={value ? 'check' : 'cross'} />
    </div>
  )

  return (
    <div className="table-body__item">
      <div className="table-body__item-content">
        <p className="table-body__item-title">{item.title}</p>
        <p className="table-body__item-description">{item.description}</p>
      </div>
      <div className="table-body__item-availability">
        {!!item.availability &&
          item.availability.map((value, index) => (
            <AvailabilityItem
              value={value}
              key={index}
              recommended={index === recommendedColumn - 1}
            />
          ))}
      </div>
    </div>
  )
}

export default TableBodyItem
