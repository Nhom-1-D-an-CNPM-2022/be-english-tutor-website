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


describe("DELETE cancel a booked lesson", () => {
    beforeEach(done => {
        chai.request(server).post("/users/login").send(user).end((err, res) => {
            token = res.body.accessToken;
            userId = res.body.user._id;
            res.should.have.status(200);
            done();
        })
    });


    it("it should not DELETE cancel a booked lesson is not exist", (done) => {
        chai.request(server)
            .post("/booking")
            .set({ Authorization: `Bearer ${token}` })
            .send("627e76e4bcac01a49eeafe9a")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
    })

    it("it should DELETE cancel a booked with lesson when does not take and the time is not over", (done) => {
        //
        let bookingId = "62a463cc314fae74af704a79";
        chai.request(server)
            .post("/booking")
            .set({ Authorization: `Bearer ${token}` })
            .send(id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("Cancel lesson successfully");
                done();
            })
    })

})