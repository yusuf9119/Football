const express = require('express');
const router = express.Router()
const Model =  require('/model/model')

module.exports = router;

//psoting data into the api
router.post('/.post',async (req,res)=>{
    //created an object where users can store their info
    //the same as the model mongoose db
    const data = new Model({
        name:req.body.team,
        age:req.body.player
    })

    try{                     //.save will save my daat
        const datatosave = await data.save();
        res.status(200).json(datatosave)
    }
    catch (error){
        res.status(400).json(error)
    }
    
})

//getting ALL data from the api
router.get('/getall',async (req,res)=>{
    try{                //model.find gets the data
        const getdata = await Model.find();
        res.send(200).json(getdata)
    }
    catch(error){
        res.send(400).json(error)
    }
})

//getting 1 DATA BY ID
router.get('/getone:id',async (req,res)=>{
    try{
        const getTHEid = await Model.find(req.params.id);
        res.send(200).json(getTHEid)

    }
    catch(error){
        res.send(400).json(error)

    }
    
})

//updating data by id
//updating IS HARDER
router.patch('/patch:id', (req,res)=>{
   try{
    const id = req.params.id;
    const updateddata = req.body
    const options = {new:true}

    const result = Model.findByIdAndUpdate(id,
        updateddata,options)
        res.send(400,result)
   }

   catch(error){
    res.status(400).json(error)}
})

//deleting ALL data
router.delete('/delete', (req,res)=>{
    try{
        const id = req.params.id;
        const data = Model.findByIdAndDelete(id)
        res.status(200).json('the documnet has been deleted',data)

    }
    catch(error){
        res.status(400).send(error)

    }
})


//deleting data 1 BY ID
router.delete('/delete:id',(req,res)=>{
   try{
    const data = Model.findByIdAndDelete();
    res.status(200).json(data)

   }
   catch(error){
    res.status(400).send(error)
}

})

