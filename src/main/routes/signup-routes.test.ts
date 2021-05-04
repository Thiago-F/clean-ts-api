import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Thiago',
        email: 'thiago@mail.com',
        password: 'teste123',
        passwordConfirmation: 'teste123'
      })
      .expect(200)
  })
})
