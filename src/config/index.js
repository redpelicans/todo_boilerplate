import should from 'should/as-function';
import development from './development';
import testing from './testing';

const supported = { development, testing };

should(process.env.NODE_ENV).equalOneOf(...Object.keys(supported));

export default supported;
