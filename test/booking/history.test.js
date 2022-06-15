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

describe("/GET history", () => {
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

        it("it should GET all histotys", (done) => { 
            chai.request(server)
                .get("/booking/history")
                .set({ Authorization: `Bearer ${token}` })
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        })
    })