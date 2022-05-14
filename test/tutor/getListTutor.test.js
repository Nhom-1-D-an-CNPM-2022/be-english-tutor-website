process.env.NODE_ENV = 'test';
import { expect } from "chai";
import getAll from "../../src/api/v1/components/tutor/services/getAll";
import connectMongoDB from "../../src/api/v1/database/mongo";
import User from "../../src/api/v1/components/users/model";
import dotenv from "dotenv";

dotenv.config({ path: "./src/api/v1/configs/.env" });


describe('get list tutor in system', async () => {
    connectMongoDB();
    it('get all tutors', async () => {
        const resulttesting = await getAll();
        // console.log(resulttesting);
       
        expect(resulttesting).to.not.be.null;
        expect(resulttesting).to.be.an('array');
        //David is tutor's dislayName exited in system
        expect(resulttesting.map(e=>(e.displayName))).to.include("David");
        //System have 7 tutors in the time runing the test
        // expect(resulttesting).to.have.lengthOf(7);
        

    })
  
    

})