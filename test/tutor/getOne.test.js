process.env.NODE_ENV = 'test';
import { expect } from "chai";
import getOne from "../../src/api/v1/components/tutor/services/getOne";
import mongoose from "mongoose";

const shouldProfile = {
    _id: mongoose.Types.ObjectId("626e88faf5aff87694e54ee1"),
  displayName: 'Henry',
  hometown: 'Vietnam',
  videoIntroduction: 'http://res.cloudinary.com/vuluuu1120/video/upload/v1651411192/dev_setups/qgindltwzu4avw92v8i3.mp3',
  introduction: 'hello',
  teachingStyles: 'funny',
  aboutMe: 'friendly'
  
}

describe('get tutor-profile', async () => {
    it('get profile of the tutor does not exits in system', async () => {
        const _id = mongoose.Types.ObjectId("6249b641d7e45a5e6f794f82");
        const resulttesting = await getOne(_id);
        //console.log(resulttesting);
        expect(resulttesting).to.be.null;
    })
    it('get profile of the tutor exits in system', async() =>{
        
        const _id = mongoose.Types.ObjectId('626e88faf5aff87694e54ee1');
        const resulttesting = await getOne(_id);
        //console.log(resulttesting);
        expect(resulttesting).to.deep.include(shouldProfile);
    })


})

