import React from 'react'

import Icon from '@components/Icon'
import Button from '@components/Button'

import imgPlaceholder from '@assets/images/placeholder.png'

const TableHeader = ({ data }) => {
  const { heading, items } = data

  const Item = ({ item }) => (
    <div
      className={`table-header__item ${item.recommended ? 'recommended' : ''}`}
    >
      <Icon name={item.icon} block="table-header" />
      <div className="table-header__item-description">
        <h6 className="table-header__item-heading">{item.title}</h6>
        {!!item.subtitle && (
          <span className="table-header__item-subtitle">{item.subtitle}</span>
        )}
      </div>
      <img
        src={imgPlaceholder}
        alt="Placeholder image"
        className="table-header__item-img"
      />
      {item.price.startsWith('F') ? (
        <span className="table-header__item-price">{item.price}</span>
      ) : (
        <span className="table-header__item-price table-header__item-price--paid">
          {item.price}
        </span>
      )}
      <Button text={item.ctaText} type="ghost" />
    </div>
  )

  return (
    <div className="table-header">
      <div className="table-header__heading-wrapper">
        <h1 className="table-header__heading">{heading}</h1>
      </div>
      <div className="table-header__items">
        {!!items && items.map(item => <Item item={item} />)}
      </div>
    </div>
  )
}

export default TableHeader
