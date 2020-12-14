//import { Tarea } from './organizeandgo/tarea';
//import { Empleado } from './organizeandgo/empleado';
//import { Equipo } from './organizeandgo/equipo';
//import { Equipo } from './organizeandgo/equipo';
//import { OrganizeAndGo } from './organizeandgo/organizeandgo';

//var empleado = new Empleado(0, "Sergio", "Vela", "hola");

//console.log(empleado);

/*const Empleado = require('./organizeandgo/empleado');
const Tarea = require('./organizeandgo/tarea');
const Equipo = require('./organizeandgo/equipo');
const OrganizeAndGo = require('./organizeandgo/organizeandgo');

empleado = new Empleado(0, "Sergio", "Vela", "Hola");
tarea = new Tarea(0, false, "Hola", "2 horas", "Alta", 0);

empleados = [empleado, empleado];
tareas = [tarea];

equipo = new Equipo(0, "Mi eq", empleados, tareas);

equipos = [equipo, equipo];

obj = new OrganizeAndGo(equipos[0]);

console.log(obj);*/

const Koa = require('koa');
const PORT = process.env.PORT || 2727;
const router = require('./routes/routes');

const app = new Koa();

// Middleware Errores
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message
        };
    }
})

// Middleware Logs
app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
    return await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
