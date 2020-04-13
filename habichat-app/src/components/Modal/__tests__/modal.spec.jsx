import React from 'react'
import { shallow } from 'enzyme'
import Modal from '../Modal'

 describe('Modal', () => {
   const wrapper = shallow(<Modal/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
