import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { afterEach } from 'mocha';
import { Model } from 'sequelize';
import Users from '../database/models/UsersModel';
import {
  validLogin,
  incorrectEmail,
  incorrectPassword,
  invalidEmailFormat,
  invalidPasswordFormat,
  emptyEmail,
  emptyPassword,
  userModel,
  tokenMock
} from './mocks/loginMock';
import { createToken } from '../../src/api/utils/JWT';
import { object } from 'joi';


chai.use(chaiHttp);

const { expect } = chai;

describe('Test on login endpoit', () => {
  //   beforeEach(() => {
  //   sinon.stub(Model, 'findAll').resolves(teamsMockList as Teams[]);
  // });
  
  afterEach(function (){
    sinon.restore();
  })
  it('loging successfully, POST, status(200)', async () => {
    // GIVEN
    //WHEN
    // THEN
    sinon.stub(Model, 'findOne').resolves(userModel as Users);
    // sinon.stub(createToken(email).returns)
    const response = await chai.request(app).post('/login').send(validLogin);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.not.be.deep.equal({ token: tokenMock});
  });

  it('error with incorrect email, status(401)', async () => {
    const response = await chai.request(app).post('/login').send(incorrectEmail);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('error with incorrect password, status(401)', async () => {
    const response = await chai.request(app).post('/login').send(incorrectPassword);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('error with incorrect email format, status(401)', async () => {
    const response = await chai.request(app).post('/login').send(invalidEmailFormat);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('error with incorrect password format, status(401)', async () => {
    const response = await chai.request(app).post('/login').send(invalidPasswordFormat);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('error with empty email, status(400)', async () => {
    const response = await chai.request(app).post('/login').send(emptyEmail);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  it('error with empty password, status(400)', async () => {
    const response = await chai.request(app).post('/login').send(emptyPassword);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  // it('should return the correct role, status(200)', async () => {
  //   const response = await chai.request(app).get('/login/role');
  //   expect(response.status).to.be.equal(200);
  //   expect(response.body).to.be.deep.equal({ "role": "user" });
  // });

});
