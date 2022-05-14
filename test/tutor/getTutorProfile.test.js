// process.env.NODE_ENV = 'test';
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../src/api/v1';

// let should = chai.should();
// chai.use(chaiHttp);
// describe('/GET/:id tutors', () => {
//     it('Tutor exist in system', (done) => {
//         let id = '6249b641d7e45a5e6f794f88'
//         chai.request(server).get('/tutors/profile/' + id).end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('_id').eql(id);
//             done();
//         });
//     });

//     it('Tutor does not exist in system', (done) => {
//         let id = "6249b641d7e45a5e6f794f8"
//         chai.request(server).get('/tutors/profile/' + id).end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             // res.body.should.have.property('message').eql('');
//             done();
//         });
//     });
// })



process.env.NODE_ENV = 'test';
import { expect } from "chai";
import mocha from 'mocha';
import getOne from "../../src/api/v1/components/tutor/services/getOne";
import connectMongoDB from "../../src/api/v1/database/mongo";
import mongoose from "mongoose";

const shouldProfile = {
    _id: mongoose.Types.ObjectId("626e88a9f5aff87694e54ede"),
  userId: mongoose.Types.ObjectId("6243b06d416b667ac26359cd"),
  displayName: 'Henry',
  hometown: 'Vietnam',
  dateOfBirth: '2000-04-29T23:00:00.000Z',
  videoIntroduction: 'http://res.cloudinary.com/vuluuu1120/video/upload/v1651411111/dev_setups/i3o7wsyuxhzvqcbohknf.mp3',
  introduction: 'hello',
  teachingStyles: 'funny',
  aboutMe: 'friendly',
  imageCertificates: 'http://res.cloudinary.com/vuluuu1120/image/upload/v1651411113/dev_setups/mzkwldceov6iiofrokfi.jpg',
  __v: 0
  
}

const shouldProfile1 = {
    _id: mongoose.Types.ObjectId("6249b641d7e45a5e6f794f88"),
    fullname: 'aaa',
    introduction: 'bbb',
    interests: 'ccc',
    profession: 'ddd',
    userId: mongoose.Types.ObjectId("6249b3ca7335a7f809752d37"),
    
  
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

    it('get profile of the tutor exits in system', async() =>{
        
        const _id = mongoose.Types.ObjectId('6249b641d7e45a5e6f794f88');
        const resulttesting = await getOne(_id);
        console.log(resulttesting);
        expect(resulttesting).to.deep.include(shouldProfile1);
    })

})

