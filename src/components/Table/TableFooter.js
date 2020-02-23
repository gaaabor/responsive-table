import React from 'react'

import Button from '@components/Button'

const TableFooter = ({ data, recommendedColumn }) => {
  const { disclaimer, ctaItems } = data

  const CtaItem = ({ item, recommended }) => (
    <div
      className={
        recommended
          ? 'table-footer__cta-item table-footer__cta-item--recommended'
          : 'table-footer__cta-item'
      }
    >
      {item.primary && <Button type="primary" text={item.primary} />}
      {item.secondary && <Button type="ghost" text={item.secondary} />}
      {item.text && <p>{item.text}</p>}
    </div>
  )

  return (
    <div className="table-footer">
      <div className="table-footer__disclaimer">
        <p>{disclaimer}</p>
      </div>
      <div className="table-footer__cta-wrapper">
        {!!ctaItems &&
          ctaItems.map((item, index) => (
            <CtaItem
              key={item.id}
              item={item}
              recommended={index === recommendedColumn - 1}
            />
          ))}
      </div>
    </div>
  )
}

export default TableFooter
