import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/api/v1';

let should = chai.should();
chai.use(chaiHttp);

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyNmQ0YjNjZDFhZjY1ZmRiMWRlNzQwYiIsImVtYWlsIjoiZGFjbnBtbjFAZ21haWwuY29tIiwiaXNWZXJpZmllZCI6ZmFsc2V9LCJpYXQiOjE2NTQ5NDIwNzYsImV4cCI6MTY1NzUzNDA3Nn0.ayalEWMIxWj3rI3pba1xafoy3v9l4DTYCi7e9-5B0PM";


describe("/GET booked lessons", () => {
    it("it should GET all booked lessons", (done) => {
        chai.request(server)
            .get("/booking/list/tutee")
            .set({ Authorization: `Bearer ${token}` })
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })

})


// let tutor = {
//     email: "duc@gmail.com",
//     password: "123456",
// };
// let token;

// describe("/GET booked lessons", () => {
//     beforeEach(done => {
//         chai.request(server)
//             .post("/users/login")
//             .send(tutor)
//             .end((err, res) => {
//                 token = res.body.accessToken;
//                 res.should.have.status(200);
//                 done();
//             })
//     });

//         it("it should GET all booked lessons", (done) => { 
//             chai.request(server)
//                 .get("/booking/list/tutee")
//                 .set({ Authorization: `Bearer ${token}` })
//                 .send()
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('array');
//                     done();
//                 })
//         })