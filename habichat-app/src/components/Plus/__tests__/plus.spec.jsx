import React from 'react'
import { shallow } from 'enzyme'
import Plus from '../Plus'

 describe('Plus', () => {
   const wrapper = shallow(<Plus/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
