const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const NoticiasSchema = new Schema({
_id: ObjectId,
titulo: String,
contenido: String,
imagen: String,
tipo: String,
}, { timestamps: true });

const NoticiasModel = mongoose.model('Noticias', NoticiasSchema);

/* GET noticias listing. */
router.get('/', async(req, res, next) => {
    try {
        const respuesta = await NoticiasModel.find();
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

router.post('/', (req, res, next) => {
    const NoticiaNueva = new NoticiasModel({
        _id: new ObjectId,
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        tipo: req.body.tipo
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