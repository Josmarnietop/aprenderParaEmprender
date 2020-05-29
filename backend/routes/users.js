const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const multer = require('multer');
const bodyParser = require('body-parser');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './imagenes')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var app = express();
const upload = multer({ storage: storage })

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


const UsuarioSchema = new Schema({
    _id: ObjectId,
    email: String,
    contraseña: String,
    tipo: String,
    nombre: String,
    apellido: String,
    canvas: String,
}, { timestamps: true });

const UsuarioModel = mongoose.model('Usuarios', UsuarioSchema);

const prueba = (req, res, next) => console.log(req);

/* GET usuario listing. */
router.get('/', async (req, res, next) => {
    try {
        const respuesta = await UsuarioModel.find();
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.get('/login', async (req, res, next) => {
    try {
        const respuesta = await UsuarioModel.find().select('_id email contraseña tipo');
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.get('/:idUsuario', async (req, res, next) => {
    const id = req.params.idUsuario
    try {
        const respuesta = await UsuarioModel.findById(id);
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.put('/:idUsuario', async (req, res) => {
    const id = req.params.idUsuario;
    const modificacion = req.body;
    try {
        await UsuarioModel.findByIdAndUpdate(id, modificacion);
        const respuesta = await UsuarioModel.findById(id);
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.post('/', upload.single('imagen'), (req, res, next) => {
    console.log('req: ', req.body);
    //const urlImagen = 'http://localhost:3000/imagenes/' + req.file.filename;
    const UsuarioNuevo = new UsuarioModel({
        _id: new ObjectId,
        email: req.body.email,
        contraseña: req.body.contraseña,
        tipo: "alumno",
        nombre: req.body.nombre,
        apellido: req.body.apellido,
    });
    UsuarioNuevo.save()
        .then(respuesta => {
            res.json({ mensaje: 'Usuario creado con exito', respuesta })
        })
        .catch(err =>
            res.status(500).json({ mensaje: 'error', tipo: err })
        )
});

router.delete('/:idUsuario', async (req, res) => {
    const id = req.params.idUsuario
    try {
        await UsuarioModel.findByIdAndDelete(id);
        res.json({ mensaje: 'se borro el Usuario con exito' })
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});


module.exports = router;