process.env.NODE_ENV = 'test';
import { expect } from "chai";
import getOne from "../../src/api/v1/components/tutor/services/getOne";
import connectMongoDB from "../../src/api/v1/database/mongo";
import mongoose from "mongoose";
import User from "../../src/api/v1/components/users/model";
import dotenv from "dotenv";

dotenv.config({ path: "./src/api/v1/configs/.env" });
const shouldProfile = {
    _id: mongoose.Types.ObjectId("6276011ef15c06269949f485"),
  displayName: 'Mike',
  hometown: 'USA',
  videoIntroduction: 'http://res.cloudinary.com/vuluuu1120/video/upload/v1651900700/dev_setups/fkubirnxsvnw4bdhne96.mp3',
  introduction: 'hello',
  teachingStyles: 'funny',
  aboutMe: 'friendly',
  imageCertificates: 'http://res.cloudinary.com/vuluuu1120/image/upload/v1651900702/dev_setups/ljziwuqau0l1mgecynya.jpg',

  
}


describe('get profile-tutor', async () => {
    connectMongoDB();
    it('get profile of the tutor does not exits in system', async () => {
        const _id = mongoose.Types.ObjectId("6249b641d7e45a5e6f794f82");
        const resulttesting = await getOne(_id);
        // console.log(resulttesting);
        expect(resulttesting).to.be.null;
    })
    it('get profile of the tutor exits in system', async() =>{
        
        const _id = mongoose.Types.ObjectId('6276011ef15c06269949f485');
        const resulttesting = await getOne(_id);
        // console.log(resulttesting);
        expect(resulttesting).to.deep.include(shouldProfile);
    })
    

})

