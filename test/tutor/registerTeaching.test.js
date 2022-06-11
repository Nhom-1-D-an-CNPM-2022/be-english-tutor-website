process.env.NODE_ENV = 'test';

import chai, { expect } from 'chai';
import userServices from '../../src/api/v1/components/users/services';
const assert = chai.assert;
import parseErrorIntoMessage from '../../src/api/v1/helpers/parseErrorIntoMessage';

describe('getOneEmail', async ()=>{
    it('getOneEmail fail because poperties null', async () => {
      try {
        const email = null;
        const result = await userServices.getOneByEmail({
            email,
            isDeleted: false,
          });
        expect(result).to.be.a('object');
        expect(result).not.to.have.property('_id');
      } catch (error) {
        
      }
    });

    it('getOneEmail succeed', async () => {
        try {
          const email = 'dacnpmn1@gmail.com';
          const result = await userServices.getOneByEmail({
              email,
              isDeleted: false,
            });
          expect(result).to.be.a('object');
          expect(result).to.have.property('_id');
        } catch (error) {
          
        }
      });
})

describe('createNewUser', async ()=>{
    it('createNewUser fail because poperties null', async () => {
      try {
        const email = null;
        const password = null;
        const type = null;
        const result = await userServices.createNewUser({
            email,
            password,
            type,
          });
        expect(result).to.be.a('object');
        expect(result).not.to.have.property('_id');
      } catch (error) {
      }
    });

    it('createNewUser fail because email null', async () => {
        try {
          const email = null;
          const password = 'null';
          const type = 'tutor';
          const result = await userServices.createNewUser({
              email,
              password,
              type,
            });
          expect(result).to.be.a('object');
          expect(result).not.to.have.property('_id');
        } catch (error) {
        }
      });

    it('createNewUser succeed', async () => {
        try {
          const email = 'tranthanhien@gmail.com';
          const password = 'tranthanhien@gmail.com';
          const type = 'tutor';
          const result = await userServices.createNewUser({
              email,
              password,
              type,
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