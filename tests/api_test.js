const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../app/index');
const PORT = 2728;
const server = app.listen(PORT);
chai.use(chaiHttp);

describe("API TESTS", () => {

    it("GET /", (done) => {
        chai.request(server)
        .get('/')
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.body.mensaje).to.equal("¡Bienvenido a la API de OrganizeAngGo!");
            done();
        });
    });

    it("POST AÑADIR EQUIPO", (done) => {
        chai.request(server)
        .post('/equipo')
        .send({id_equipo: 1, nombre: "Mi equipo"})
        .end( function(err,res){
            expect(res).to.have.status(202);
            expect(res.body).to.have.property('id_equipo').to.be.equal(1);
            expect(res.body).to.have.property('nombre').to.be.equal("Mi equipo");
            done();
        });
    });

    it("POST AÑADIR EQUIPO SIN PARÁMETROS", (done) => {
        chai.request(server)
        .post('/equipo')
        .send({})
        .end( function(err,res){
            expect(res).to.have.status(400);
            done();
        });
    });

    it("POST AÑADIR EMPLEADO", (done) => {
        chai.request(server)
        .post('/empleado')
        .send({id_equipo: 1, id_empleado: 1, nombre: "Sergio", apellido: "Vela", email: "sergiovp96@gmail.com"})
        .end( function(err,res){
            expect(res).to.have.status(202);
            expect(res.body).to.have.property('id_empleado').to.be.equal(1);
            expect(res.body).to.have.property('nombre').to.be.equal("Sergio");
            expect(res.body).to.have.property('apellido').to.be.equal("Vela");
            expect(res.body).to.have.property('email').to.be.equal("sergiovp96@gmail.com");
            done();
        });
    });

    it("POST AÑADIR EMPLEADO SIN PARÁMETROS", (done) => {
        chai.request(server)
        .post('/empleado')
        .send({})
        .end( function(err,res){
            expect(res).to.have.status(400);
            done();
        });
    });

    it("GET OBTENER INFORMACIÓN EMPLEADO", (done) => {
        chai.request(server)
        .get('/empleado/1/1')
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('_id').to.be.equal(1);
            expect(res.body).to.have.property('_nombre').to.be.equal("Sergio");
            expect(res.body).to.have.property('_apellido').to.be.equal("Vela");
            expect(res.body).to.have.property('_email').to.be.equal("sergiovp96@gmail.com");
            done();
        });
    });

    it("GET OBTENER INFORMACIÓN EMPLEADO INEXISTENTE", (done) => {
        chai.request(server)
        .get('/empleado/1/0')
        .end( function(err,res){
            expect(res).to.have.status(404);
            done();
        });
    });

    it("MODIFICAMOS INFORMACIÓN DEL EMPLEADO", (done) => {
        chai.request(server)
        .put('/empleado')
        .send({id_equipo: 1, id_empleado: 1, email: "sergiovp96@hotmail.com"})
        .end( function(err,res){
            expect(res).to.have.status(202);
            expect(res.body).to.have.property('id').to.be.equal(1);
            expect(res.body).to.have.property('nombre').to.be.equal("Sergio");
            expect(res.body).to.have.property('apellido').to.be.equal("Vela");
            expect(res.body).to.have.property('email').to.be.equal("sergiovp96@hotmail.com");
            done();
        });
    });

    it("GET OBTENER INFORMACIÓN EMPLEADO CON INFORMACIÓN MODIFICADA", (done) => {
        chai.request(server)
        .get('/empleado/1/1')
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('_id').to.be.equal(1);
            expect(res.body).to.have.property('_nombre').to.be.equal("Sergio");
            expect(res.body).to.have.property('_apellido').to.be.equal("Vela");
            expect(res.body).to.have.property('_email').to.be.equal("sergiovp96@hotmail.com");
            done();
        });
    });

    it("POST AÑADIR TAREA", (done) => {
        chai.request(server)
        .post('/tarea')
        .send({id_equipo: 1, id_tarea: 1, terminada: false, descripcion: "Empezar el TFG",
            tiempo_estimado: "Medio año", prioridad: "Importante", empleado_asignado: 1})
        .end( function(err,res){
            expect(res).to.have.status(202);
            expect(res.body).to.have.property('id_tarea').to.be.equal(1);
            expect(res.body).to.have.property('terminada').to.be.equal(false);
            expect(res.body).to.have.property('descripcion').to.be.equal("Empezar el TFG");
            expect(res.body).to.have.property('tiempoEstimado').to.be.equal("Medio año");
            expect(res.body).to.have.property('prioridad').to.be.equal("Importante");
            expect(res.body).to.have.property('empleadoAsignado').to.be.equal(1);
            done();
        });
    });

    it("POST AÑADIR TAREA SIN PARÁMETROS", (done) => {
        chai.request(server)
        .post('/tarea')
        .send({})
        .end( function(err,res){
            expect(res).to.have.status(400);
            done();
        });
    });
});
