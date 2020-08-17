import React from 'react'
import Helmet from 'react-helmet'
import styles from '../styles/layout.module.scss'
import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => (
  <div className={styles.layout}>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
