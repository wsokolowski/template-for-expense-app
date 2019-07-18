import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { eventNames } from 'cluster';

Enzyme.configure({
    adapter: new Adapter()
});

require('dotenv').config({ path: '.env.test' });