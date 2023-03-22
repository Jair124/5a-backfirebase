const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
require('dotenv/config')
//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Configuracion claves de firebase
const firebaseConfig = {
    apiKey: "AIzaSyDGVQLd21yyvStc_lJ59U43jlvIupyNRUs",
    authDomain: "examen5a.firebaseapp.com",
    projectId: "examen5a",
    storageBucket: "examen5a.appspot.com",
    messagingSenderId: "505989221047",
    appId: "1:505989221047:web:cbc3bccde107dc31f41b32"
  };

//Inicializar la BD
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()

//Inicializar el servidor
const app = express()

//configuracion CORS
const corsOptions = {
    "Origin": "*",
    "optionSuccessStatus": 200
}

app.use(express.json())
app.use(cors(corsOptions))

//Configuracion Rutas

//Ruta para insertar un nuevo registro
app.post('/create', (req, res) => {
    const {
        nombre, apaterno, amaterno, direccion, telefono, ciudad, estado, email
    } = req.body

    if(nombre.length < 3){
        res,json({'alert': 'El nombre debe tener minimo 3 caracteres'})
    }
})

//ruta para leer un registro
app.get('/read', (req, res) => {

})

//ruta para actualizar un registro
app.post('/update', (req, res) => {

})

//Ruta para borrar un registro
app.post('/delete' ,(req, res) => {

})

//Poner servidor en escucha
const PORT = process.env.PORT || 20000

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})