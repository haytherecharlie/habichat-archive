import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../Loading'

 describe('Loading', () => {
   const wrapper = shallow(<Loading/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
