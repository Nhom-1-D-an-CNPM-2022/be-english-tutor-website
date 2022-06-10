process.env.NODE_ENV = 'test';


import chai, { expect } from 'chai';
import User from '../../src/api/v1/components/users/model';
import userServices from '../../src/api/v1/components/users/services';
import parseErrorIntoMessage from '../../src/api/v1/helpers/parseErrorIntoMessage';

describe('Login Get one by user', async ()=>{
    it('Email is correct', async () => {
        const email = "nguyendinhhung@gmail.com";
        try {
            const result = await userServices.getOne({ email});
            expect(result).to.be.a('object');
            expect(result).to.have.property('_id');
        } catch (error) {
        }  
    });

    it('Email is incorrect because email null', async () => {
        const email = null;
        try {
            const result = await userServices.getOne({ email});
            expect(result).to.throw('Không tìm thấy user')
            expect(result).to.be.a('object');
            expect(result).not.to.have.property('_id');
        } catch (error) {
        }  
    });

    it("Email is incorrect because email ''", async () => {
        const email = '';
        try {
            const result = await userServices.getOne({ email});
            expect(result).to.throw('Không tìm thấy user')
            expect(result).to.be.a('object');
            expect(result).not.to.have.property('_id');
        } catch (error) {
        }  
    });
  })

describe('UserGenerate', async ()=>{
    it('UserGenerate succeed', async () => {
        const email = "nguyendinhhung@gmail.com";
    try {
        const user = await userServices.getOne({ email});
        const { accessToken, refreshToken } = User.generateToken(userFoundByEmail);
        expect(refreshToken).to.be.a('string');
        expect(accessToken).to.be.a('string');
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

