import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredField Validation', () => {
  test('should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({
      name: 'any_name'
    })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should not return if validation succedds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({
      field: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
