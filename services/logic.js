const db=require('./db')

const getAllContacts=()=>{
    return db.contact.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                data:result
            }
        }else{
            return{
                statusCode:404,
                data:'error occured'
                
            }
        }
    })
}







const getAContact =(id)=>{
    return db.contact.find({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                data:result
            }
        }else{
            return{
                statusCode:404,
                data:'Contact not Found'
            }
        }
    })
}

const editAContact=(id,name,username,phone,email,address,zipcode)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            result.id=id,
            result.name=name,
            result.username=username,
            result.phone=phone,
            result.email=email,
            result.address=address,
            result.zipcode=zipcode


            result.save()

            return{
                statusCode:200,
                data:'Contact Added Successfully'
            }

        }else{
            return{
                statusCode:404,
                data:'Cant find Contact'
            }
           
        }
        
    })
}



const deleteAContact=(id)=>{
    db.contact.deleteOne({id}).then((result)=>{
        return{
            statuscode:200,
            data:"Contact Deleted Successfully"
        }
    }).catch((error)=>{
        return{
            statusCode:404,
            data:'Cant find contact'
        }
    })

}

const addAContact=(id,name,username,phone,email,address,zipcode)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                data:'ID already exists'
            }
        }else{
            const newContact = new db.contact({id,name,username,phone,email,address,zipcode})
            newContact.save()
            
        
            return{
                statusCode:200,
                data:"Contact added Successfully"
            }
        }
    })
}

module.exports={
    getAllContacts,
    getAContact,
    editAContact,
    deleteAContact,
    addAContact
}