import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import Teams from '../database/models/TeamModel';

import { Response } from 'superagent';
import { afterEach } from 'mocha';
import { Model } from 'sequelize';
import TeamsService from '../api/services/TeamsService';
import { teamsMockList } from './mocks/teamsMockList';

chai.use(chaiHttp);

const { expect } = chai;

describe('Service Teams test', () => {
    beforeEach(() => {
    sinon.stub(Model, 'findAll').resolves(teamsMockList as Teams[]);
  });
  
  afterEach(function (){
    sinon.restore();
  })
  it('Get all teams at /teams endpoint', async () => {
    // GIVEN
    //WHEN
    // THEN
    const response = await chai.request(app).get('/teams');   
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(teamsMockList);
    expect(response.body.length).to.be.equal(16);
  })

  it('Get a team by id at /teams:id endpoint', async () => {
    // GIVEN
    //WHEN
    // THEN
    sinon.stub(Model, 'findOne').resolves(teamsMockList[1] as Teams)
    const response = await chai.request(app).get('/teams/2');   
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(teamsMockList[1]);
  })
});
