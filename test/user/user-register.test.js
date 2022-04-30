
process.env.NODE_ENV = 'test';

// import { should as _should, use } from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../src/api/v1';
// let should = _should();
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/api/v1';

let should = chai.should();

chai.use(chaiHttp);
describe('/POST Register', () => {
    it('it should POST a user', (done) => {
        let user = {
            email: "hiendeptrai@gmail.com",
            password: "password",
            fullname: "fullname"
        };
        chai.request(server)
            .post('/users/register')
            .send(user)
            .end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('user successfully added!');
                res.body.user.should.have.property('id');
                res.body.user.should.have.property('email').eql(user.email);
                res.body.user.should.have.property('password').eql(user.password);
                res.body.user.should.have.property('fullname').eql(user.fullname);
                done();
            });
    });

    it('it should not POST a user because user is null', (done) => {
        let user = null;
        chai.request(server)
            .post('/users/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("data and salt arguments required");
                done();
            });
    });

    it('it should not POST a user because properties in user is null', (done) => {
        let user = {
            email: null,
            password: null,
            fullname: null
        };
        chai.request(server)
            .post('/users/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("data and salt arguments required");
                done();
            });
    });

    it('it should not POST a user because email dont have @ ', (done) => {
        let user = {
            email: "hiendeptraigmail.com",
            password: "password_hiendeptrai@gmail.com",
            fullname: "fullname_hiendeptrai@gmail.com"
        };
        chai.request(server)
            .post('/users/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                //res.body.should.have.property('message').eql("email dont have @");
                done();
            });
    });

    it('it should not POST a user because email was signed up ', (done) => {
        let user = {
            email: "dacnpmn1@gmail.com",
            password: "123456789aA",
            fullname: "dacnpmn1"
        };
        chai.request(server)
            .post('/users/register')
            .send(user)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("Email đã tồn tại");
                done();
            });
    });
});