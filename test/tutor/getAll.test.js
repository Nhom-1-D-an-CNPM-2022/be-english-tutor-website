process.env.NODE_ENV = 'test';
import { expect } from "chai";
import getAll from "../../src/api/v1/components/tutor/services/getAll";
import connectMongoDB from "../../src/api/v1/database/mongo";
import User from "../../src/api/v1/components/users/model";

describe('get list tutor in system', async () => {
    it('get all tutors', async () => {
        const resulttesting = await getAll();
        //console.log(resulttesting);

        expect(resulttesting).to.not.be.null;
        expect(resulttesting).to.be.an('array');
        for (var i = 0; i < resulttesting.length; i++) {
            expect(resulttesting[i]._id).to.be.a('object');
        }


    })



})