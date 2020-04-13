import { shallow } from 'enzyme'
import Router from '../Router'

 describe('Router', () => {
   const wrapper = shallow(<Router/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
