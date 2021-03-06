import dotenv from 'dotenv';
dotenv.config()

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Avanza, { TODAY, ONE_YEAR } from '../dist';

chai.use(chaiAsPromised);
chai.should();


describe('chartdata', () => {

    let client;

    before(() => {
        client = new Avanza();
        return client.authenticate({
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        })
    });

    it('should successfully fetch chart data', () => {
       return client.getChartdata('106733', TODAY).should.not.be.rejected;
    });
    
});