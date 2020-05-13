const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const multer  = require('multer');
const bodyParser = require('body-parser');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenes')
  },
  filename: function (req, file, cb) {
   cb(null, Date.now() + '-' + file.originalname )
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


const NoticiasSchema = new Schema({
_id: ObjectId,
titulo: String,
contenido: String,
urlLink: String,
imagen: String,
tipo: String,
}, { timestamps: true });

const NoticiasModel = mongoose.model('Noticias', NoticiasSchema);

const prueba = (req, res, next) => console.log(req);

/* GET noticias listing. */
router.get('/', async(req, res, next) => {
    try {
        const respuesta = await NoticiasModel.find();
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

/* AQUI HACER EL FILTRO PUNTUAL PARA LOS LINKS*/
router.get('/links', async(req, res, next) => {
    try {
        const respuesta = await NoticiasModel.find({tipo: 'link'});
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

/* AQUI HACER EL FILTRO PUNTUAL PARA LOS CURSOS*/
router.get('/cursos', async(req, res, next) => {
    try {
        const respuesta = await NoticiasModel.find({tipo: 'curso'});
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

/* AQUI HACER EL FILTRO PUNTUAL PARA LOS CONCURSOS*/
router.get('/concursos', async(req, res, next) => {
    try {
        const respuesta = await NoticiasModel.find({tipo: 'concurso'});
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.get('/:idNoticia', async(req, res, next) => {
    const id = req.params.idNoticia
    try {
        const respuesta = await NoticiasModel.findById(id);
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.put('/:idNoticia', async(req, res) => {
    const id = req.params.idNoticia;
    const modificacion = req.body;
    try {
        await NoticiasModel.findByIdAndUpdate(id, modificacion);
        const respuesta = await NoticiasModel.findById(id);
        res.json(respuesta)
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});

router.post('/', upload.single('imagen'), (req, res, next) => {
    console.log('req: ', req.body);
    const urlImagen = 'http://localhost:3000/imagenes/' + req.file.filename;
    const NoticiaNueva = new NoticiasModel({
        _id: new ObjectId,
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        urlLink: req.body.link,
        tipo: req.body.tipo,
        imagen: urlImagen
    });
    NoticiaNueva.save()
        .then(respuesta => {
            res.json({ mensaje: 'Documento creado con exito', respuesta })
        })
        .catch(err =>
            res.status(500).json({ mensaje: 'error', tipo: err })
        )
});

router.delete('/:idNoticia', async(req, res) => {
    const id = req.params.idNoticia
    try {
        await NoticiasModel.findByIdAndDelete(id);
        res.json({ mensaje: 'se borro la Noticia con exito' })
    } catch (error) {
        res.status(500).json({ mensaje: 'error, no se encontraron datos', tipo: error })
    }
});


module.exports = router;