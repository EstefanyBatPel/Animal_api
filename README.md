PASOS:

1. HACEMOS LA CARPETA DATABASE/CONNECTION-DB.JS
    SEQUALIZED
2. MODELS/DBMODELS.JS
    IMPORTACIONES
        DATATYPE FROM SEQUALIZED
        CONNECTION-DB
3. CONTROLLERS
    AQUI VAN LOS MÉTODOS (LAS FUNCIONALIDADES QUE QUEREMOS QUE TENGA NUESTRA DB)

    DBMODELS.FINDALL
    OBJETOSEQUALIZED.MÉTODO DE SEQUALIZED

4. ROUTERS
    IMPORTAMOS: EXPRESS, LOS CONTROLLERS Y LAS VALIDACIONES
    CREAMOS LAS RUTAS:

5. APP.JS (levanta servidor y pone disponbles mis rutas)
    IMPORTAMOS TODO.
    CONECTA CON EL ENRUTADO, QUE CONECTA CON NUESTRA DB, QUE CON SEQUALIZED CONECTA CON LOS MÉTODOS Y LOS CONTROLLERS


      app.use(express.json())  // Middleware para parsear el cuerpo de las peticiones a JSON
        app.use("/api", AnimalRouter)  // Montar el enrutador de animales en la ruta /api

    const app = express();

        try {
            await connection_db.authenticate();
            console.log(chalk.green('We are in conection ( /^u^)/ Yipiee!!\n'));
        } 
        
        catch (error) {
        console.error('Oh oh...We have a problem ( ono) error:', error);
    }

6. VALIDACIONES

    INSTALAR EXPRESS VALIDATION (HERRAMIENTA DE VALIDACIÓN DEPENDENCIA DE PRODUCCIÓN)

    CARPETA VALIDATION
        DENTRO IRAN ARCHIVOS PARA CADA CONTROLADOR QUE NECESITEMOS
        según la documentación nos cuenta, creamos un array
7. TEST

    CARPETA TEST/NOMBRETABLA.TEST.JS

    INSTALAR SUPERTEST: npm install supertest --save-dev
    INSTALAR JEST npm i jest
    INSTALAR CROSS-ENV

    CAMBIAR PACKAGE.JSON/SCRIPT DE TEST: 

    en app.js export default app

    En el archivo nombretabla.test.js:

    import request from supertest 
    import app fro ../app.js

    const api = request(app); // nos permite hacer solicitudes a la app
















