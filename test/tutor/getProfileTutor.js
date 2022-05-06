process.env.NODE_ENV = 'test';
import { expect } from "chai";
import getOne from "../../src/api/v1/components/tutor/services/getOne";
import connectMongoDB from "../../src/api/v1/database/mongo";
import mongoose from "mongoose";
import User from "../../src/api/v1/components/users/model";

const shouldProfile = {
    _id: mongoose.Types.ObjectId("626e88a9f5aff87694e54ede"),
  displayName: 'Henry',
  hometown: 'Vietnam',
  
  videoIntroduction: 'http://res.cloudinary.com/vuluuu1120/video/upload/v1651411111/dev_setups/i3o7wsyuxhzvqcbohknf.mp3',
  introduction: 'hello',
  teachingStyles: 'funny',
  aboutMe: 'friendly',
  imageCertificates: 'http://res.cloudinary.com/vuluuu1120/image/upload/v1651411113/dev_setups/mzkwldceov6iiofrokfi.jpg',

  
}


describe('get profile-tutor', async () => {
    connectMongoDB();
    it('get profile of the tutor does not exits in system', async () => {
        const _id = mongoose.Types.ObjectId("6249b641d7e45a5e6f794f82");
        const resulttesting = await getOne(_id);
        console.log(resulttesting);
        expect(resulttesting).to.be.null;
    })
    it('get profile of the tutor exits in system', async() =>{
        
        const _id = mongoose.Types.ObjectId('626e88a9f5aff87694e54ede');
        const resulttesting = await getOne(_id);
        console.log(resulttesting);
        expect(resulttesting).to.deep.include(shouldProfile);
    })
    

})

