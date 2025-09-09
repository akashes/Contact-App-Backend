const express = require('express')
const cors = require('cors')

const logic = require('./services/logic')
const contactServer= express()

contactServer.use(cors({
    origin:'process.env.FRONTEND_URL'

    
}))

contactServer.use(express.json())

contactServer.listen(4000,()=>{
    console.log('contactServer started and listening in the port 4000');
})

contactServer.get('/get-contact-data',(req,res)=>{
    logic.getAllContacts().then((result)=>{
        res.status(result.statusCode).json(result)

    })
    
})

contactServer.get('/get-a-contact/:id',(req,res)=>{
    logic.getAContact(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

contactServer.post('/edit-a-contact/:id',(req,res)=>{
    logic.editAContact(req.params.id,req.body.name,req.body.username,req.body.phone,req.body.email,req.body.address,req.body.zipcode).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

contactServer.delete('/delete-a-contact/:id',(req,res)=>{
    logic.deleteAContact(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

contactServer.post('/add-a-contact',(req,res)=>{
    logic.addAContact(req.body.id,req.body.name,req.body.username,req.body.phone,req.body.email,req.body.address,req.body.zipcode).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
