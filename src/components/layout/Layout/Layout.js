import React from 'react'
import Helmet from 'react-helmet'
import styles from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'

const TemplateWrapper = ({ children }) => (
  <div className={styles.layout}>
    <Helmet title="TERRY CREAMER" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
