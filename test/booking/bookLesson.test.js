import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/api/v1';

let should = chai.should();
chai.use(chaiHttp);

let user = {
    email: "dacnpmn1@gmail.com",
    password: "123456789aA",
};
let token;
let userId;
let lession = {
    scheduleId: "62826d298311992bb473837c",
    studentRequest: ""
}

describe("POST book lesson", () => {
    beforeEach(done => {
        chai.request(server).post("/users/login").send(user).end((err, res) => {
            token = res.body.accessToken;
            userId = res.body.user._id;
            res.should.have.status(200);
            done();
        })
    });


    it("it should not POST book a lesson with scheduleId is null", (done) => {
        chai.request(server)
            .post("/booking")
            .set({ Authorization: `Bearer ${token}` })
            .send(null)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
    })

    it("it should POST book with a lesson with scheduleId is not null", (done) => {
        chai.request(server)
            .post("/booking")
            .set({ Authorization: `Bearer ${token}` })
            .send(lession)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql("PENDING");
                done();
            })
    })

})