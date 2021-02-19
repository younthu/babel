// filename: packages/babel-parser/test/curry-function.js

import { parse } from '../lib';

function getParser(code) {
  return () => parse(code, { sourceType: 'module' });
}

// describe('curry function syntax', function() {
//   it('should parse', function() {
//       console.log(getParser(`function @@ foo() {}`)())
//     expect(getParser(`function @@ foo() {}`)()).toMatchSnapshot();
//   });
// });



// describe('digital metrics m syntax', function() {
//     it('should parse', function() {
//         console.log(getParser(`1m`)())
//       expect(getParser(`1m`)()).toMatchSnapshot();
//     });
//   });




// describe('digital metric g syntax', function() {
//     it('should parse', function() {
//         console.log(getParser(`1g`)())
//       expect(getParser(`1g`)()).toMatchSnapshot();
//     });
//   });


  describe('digital metric k syntax', function() {
    it('should parse', function() {
        console.log(getParser(`1k`)())
        console.log(`1k*1k`)
      expect(getParser(`1k`)()).toMatchSnapshot();
    });
  });