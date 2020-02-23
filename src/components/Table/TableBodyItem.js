import React from 'react'
import ReactTooltip from 'react-tooltip'

import Icon from '../Icon'

const TableBodyItem = ({ item, recommendedColumn }) => {
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
        <span className="table-body__item-info" data-tip data-for="tooltip">
          <Icon block="table-body" name="info" />
        </span>
        <ReactTooltip
          id="tooltip"
          className="table-body__item-tooltip"
          effect="solid"
        >
          <span>Show happy face</span>
        </ReactTooltip>
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
