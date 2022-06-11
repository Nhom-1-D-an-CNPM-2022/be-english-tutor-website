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

let accept = {
    bookingId: "62a476406a59e87439130851",
    tutorResponse: ""
}

describe("/PUT accept reservation", () => {
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

    // it("it should not PUT accept a booked lessons null", (done) => {
    //     chai.request(server)
    //         .put("/booking/accept")
    //         .set({ Authorization: `Bearer ${token}` })
    //         .send()
    //         .end((err, res) => {
    //             res.should.have.status(400);
    //             res.body.should.be.a('object');
    //             done();
    //         })
    // })

    it("it should PUT accept a booked lessons not null", (done) => {
        chai.request(server)
            .put("/booking/accept")
            .set({ Authorization: `Bearer ${token}` })
            .send(accept)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql("ACCEPTED");
                done();
            })

    })
})