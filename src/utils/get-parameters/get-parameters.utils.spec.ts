import { getParameters } from './get-parameters.utils'

describe('Get parameters', () => {
  it('should return parameters name from a function', () => {
    function a (b,c) { console.log(b, c) }
    expect(getParameters(a)).toEqual(['b', 'c'])
  })

  it('should return parameters name from a class method', () => {
    class Test {
      a (b, c) {
        console.log(b, c)
      }
    }
    expect(getParameters(new Test().a)).toEqual(['b', 'c'])
  })

  it('should return parameters name from a class static method', () => {
    class Test {
      static a (b, c) {
        console.log(b, c)
      }
    }
    expect(getParameters(Test.a)).toEqual(['b', 'c'])
  })
})
