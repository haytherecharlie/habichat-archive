import { shallow } from 'enzyme'
import TermsOfService from '../TermsOfService'

 describe('TermsOfService', () => {
   const wrapper = shallow(<TermsOfService/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
