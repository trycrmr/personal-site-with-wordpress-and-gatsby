import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism' // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD

const PostCode = ({ language, children }) => (
  <SyntaxHighlighter style={style} language={language}>
    {children}
  </SyntaxHighlighter>
)

export default PostCode
