import supertest from 'supertest';
import app from '../../../app';
import models from '../../database/models';

describe('api test', () => {
  const request = supertest(app);
  afterAll(async () => {
    await models.Number.destroy({ force: true, truncate: { cascade: true } });
  });
  it('passes', (done) => {
    request
      .post('/api/generate')
      .send({ count: 10 })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(200);
        done();
      });
  });

  it('fails if invalid count is provided', (done) => {
    request
      .post('/api/generate')
      .send({ count: 'string' })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(422);
        done();
      });
  });

  it('passes', (done) => {
    request
      .post('/api/generate')
      .send({ count: 10 })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(200);
        done();
      });
  });

  it('fails if invalid count is provided', (done) => {
    request
      .post('/api/generate')
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(422);
        done();
      });
  });

  it('fails if invalid count is provided', (done) => {
    request
      .post('/api/generate')
      .send({ count: 100009 })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(422);
        done();
      });
  });
});
