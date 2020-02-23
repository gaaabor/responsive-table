import React, { useEffect, useState } from 'react'
import Sticky from 'react-sticky-el'

import TableHeaderItem from './TableHeaderItem'
import isInViewport from '@helpers/isInViewport'

const TableHeader = ({ data }) => {
  const { heading, items } = data

  const [isSticky, setIsSticky] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  let footer

  useEffect(() => {
    footer = document.querySelector('.table-footer')

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (isInViewport(footer)) {
      setIsFooterVisible(true)
    } else {
      setIsFooterVisible(false)
    }
  }

  return (
    <Sticky
      style={{ zIndex: 2, position: 'relative' }}
      onFixedToggle={() => !isFooterVisible && setIsSticky(!isSticky)}
      disabled={isFooterVisible}
    >
      <div
        className={
          isSticky ? 'table-header table-header--sticky' : 'table-header'
        }
      >
        <div className="table-header__heading-wrapper">
          <h1 className="table-header__heading">{heading}</h1>
        </div>
        <div className="table-header__items">
          {!!items &&
            items.map(item => (
              <TableHeaderItem key={item.id} item={item} isSticky={isSticky} />
            ))}
        </div>
      </div>
    </Sticky>
  )
}

export default TableHeader
