import { getFunctionParameters } from './get-function-parameters.utils'

describe('Get parameters', () => {
  it('should return parameters name from a function', () => {
    function a (b,c) { console.log(b, c) }
    expect(getFunctionParameters(a)).toEqual(['b', 'c'])
  })

  it('should return parameters name from a class method', () => {
    class Test {
      a (b, c) {
        console.log(b, c)
      }
    }
    expect(getFunctionParameters(new Test().a)).toEqual(['b', 'c'])
  })

  it('should return parameters name from a class static method', () => {
    class Test {
      static a (b, c) {
        console.log(b, c)
      }
    }
    expect(getFunctionParameters(Test.a)).toEqual(['b', 'c'])
  })
})
