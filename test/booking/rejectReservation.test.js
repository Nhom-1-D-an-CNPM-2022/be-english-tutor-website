import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/api/v1';

let should = chai.should();
chai.use(chaiHttp);



let tutor = {
    email: "duc@gmail.com",
    password: "123456",
};
let token;

let reject = {
    bookingId: "62a476a731c99cfe516d946b",
    tutorResponse: ""
}

describe("/PUT reject reservation", () => {
    beforeEach(done => {
        chai.request(server)
            .post("/users/login")
            .send(tutor)
            .end((err, res) => {
                token = res.body.accessToken;
                res.should.have.status(200);
                done();
            })
    });

    // it("it should not PUT reject a booked lessons null", (done) => {
    //     chai.request(server)
    //         .put("/booking/reject")
    //         .set({ Authorization: `Bearer ${token}` })
    //         .send()
    //         .end((err, res) => {
    //             res.should.have.status(400);
    //             res.body.should.be.a('object');
    //             done();
    //         })
    // })

    it("it should PUT reject a booked lessons not null", (done) => {
        chai.request(server)
            .put("/booking/reject")
            .set({ Authorization: `Bearer ${token}` })
            .send(reject)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql("REJECTED");
                done();
            })

    })
})