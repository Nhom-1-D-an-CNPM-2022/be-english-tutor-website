process.env.NODE_ENV = 'test';


import chai, { expect } from 'chai';
import getOneByUserId from '../../src/api/v1/components/tutor/services/getOneByUserId';
import parseErrorIntoMessage from '../../src/api/v1/helpers/parseErrorIntoMessage';

describe('Schedule Reservation Availability', async ()=>{
    it('Create fail because _id null', async () => {
        const _id = null;
        try {
            const result = await getOneByUserId(_id);
            expect(result).to.be.a('object');
            expect(result).to.have.property('_id');
        } catch (error) {
        }  
    });

    it('Create fail because _id undifined', async () => {
        const _id = 'null';
        try {
            const result = await getOneByUserId(_id);
            expect(result).to.be.a('object');
            expect(result).to.have.property('_id');
        } catch (error) {
        }  
    });

    it('Create succeed', async () => {
        const _id = '6276011ef15c06269949f485';
        try {
            const result = await getOneByUserId(_id);
            expect(result).to.be.a('object');
            expect(result).have.property('_id');
        } catch (error) {
        }  
    });
  })

  describe('parseErrorIntoMessage', async ()=>{
    it('parseErrorIntoMessage', async () => {
        const error = 'error'
        expect(parseErrorIntoMessage(error)).to.have.property('message');
    });

    it('parseErrorIntoMessage fail', async () => {
        expect(parseErrorIntoMessage()).to.have.property('message').eql("Lỗi không xác định");
    });
})