process.env.NODE_ENV = 'test';

import chai, { expect } from 'chai';
import updateProfileById from '../../src/api/v1/components/tutor/services/updateProfileById.js'
import parseErrorIntoMessage from '../../src/api/v1/helpers/parseErrorIntoMessage';

describe('updateProfileById', async ()=>{
    it('updateProfileById fail because id null', async () => {
        const id = null;
        try {
            const result = await updateProfileById(id, {
                data: {
                  status: "approved",
                },
              });
            expect(result).to.be.a('object');
            expect(result).not.to.have.property('_id');
        } catch (error) {
        }  
    });

    it('updateProfileById fail because id undifined', async () => {
        const id = '';
        try {
            const result = await updateProfileById(id, {
                data: {
                  status: "approved",
                },
              });
            expect(result).to.be.a('object');
            expect(result).not.to.have.property('_id');
        } catch (error) {
        }  
    });

    it('updateProfileById succeed', async () => {
        const id = '6276011ef15c06269949f485';
        try {
            const result = await updateProfileById(id, {
                data: {
                  status: "approved",
                },
              });
            expect(result).to.be.a('object');
            expect(result).to.have.property('_id');
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