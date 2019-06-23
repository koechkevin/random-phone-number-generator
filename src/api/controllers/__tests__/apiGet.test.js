import supertest from 'supertest';
import app from '../../../app';
import models from '../../database/models';

describe('api get', () => {
  const request = supertest(app);
  beforeAll(async () => {
    await models.Number.destroy({ force: true, truncate: { cascade: true } });
  });
  afterAll(async () => {
    await models.Number.destroy({ force: true, truncate: { cascade: true } });
  });
  it('passes', (done) => {
    request
      .get('/api/numbers?orderBy=id&order=DESC&page=1')
      .end((err, res) => {
        if (err) done();
        expect(res.status).toEqual(200);
        done();
      });
  });
  it('passes', (done) => {
    request
      .get('/api/numbers')
      .end((err, res) => {
        if (err) done();
        expect(res.status).toEqual(200);
        done();
      });
  });
  it('gets recently generated', (done) => {
    request
      .get('/api/recently-generated')
      .end((err, res) => {
        if (err) done();
        expect(res.status).toEqual(200);
        done();
      });
  });
  it('gets recently generated twice', async (done) => {
    await models.Number.create({
      mobile: 72727727,
      createdAt: new Date(),
      updatedAt: new Date(),
      recently_generated: 2,
    });
    request
      .get('/api/recently-generated')
      .end((err, res) => {
        if (err) done();
        expect(res.status).toEqual(200);
        done();
      });
  });
});
