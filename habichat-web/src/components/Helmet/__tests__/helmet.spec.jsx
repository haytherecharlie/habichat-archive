import { shallow } from 'enzyme'
import Helmet from '../Helmet'

 describe('Helmet', () => {
   const wrapper = shallow(<Helmet/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
