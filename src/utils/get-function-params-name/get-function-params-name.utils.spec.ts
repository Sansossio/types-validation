import { getFunctionParamsName } from './get-function-params-name.utils'

describe('Get funciton params name', () => {
  it('should return parameters name from a function', () => {
    function a (b,c) { console.log(b, c) }
    expect(getFunctionParamsName(a)).toEqual(['b', 'c'])
  })

  it('should return parameters name from a class method', () => {
    class Test {
      a (b, c) {
        console.log(b, c)
      }
    }
    expect(getFunctionParamsName(new Test().a)).toEqual(['b', 'c'])
  })

  it('should return parameters name from a class static method', () => {
    class Test {
      static a (b, c) {
        console.log(b, c)
      }
    }
    expect(getFunctionParamsName(Test.a)).toEqual(['b', 'c'])
  })
})
