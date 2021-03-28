import React from 'react'
import {
  Drawer,
  Footer,
} from '../components'

const _Page = (props) => {
  return (
    <div>
      <Drawer />
      {props.children}
      <Footer />
    </div>
  )
}

export default _Page
