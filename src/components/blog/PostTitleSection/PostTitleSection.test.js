import React from 'react'
import renderer from 'react-test-renderer'

import PostTitleSection from './index.js'

describe('PostTitleSection', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PostTitleSection title="Post Title Section woop dee doo" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
