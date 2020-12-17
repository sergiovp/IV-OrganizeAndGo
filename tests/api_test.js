const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../app/index');

chai.use(chaiHttp);

after(() => {
    app.close();
});

describe('Testing de la API: ', () => {
    
    it('GET /', (done) => {
        chai.request(app)
        .get('/')
        .end( function(err,res) {
            expect(res).to.have.status(200);
            //expect(res.body._id).to.equal(0);
            //expect(res.body._nombre).to.equal("Sergio");
            //expect(res.body._apellido).to.equal("Vela");
            //expect(res.body._email).to.equal("sergiovp96@gmail.com");
            done();
        });
    });
});