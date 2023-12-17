const express = require('express');
const router = express.Router()
const Model =  require('/model/model')
const axios = require('axios')

module.exports = router;

//psoting data into the api
router.post('/.post',async (req,res)=>{
 
    const data = new Model({
        team:req.body.team,
        player:req.body.player,
        league:req.body.league,
        country:req.body.country,
        goals:req.body.goals,
        assists:req.body.assists,
        position:req.body.position
    })

    try{                    
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

router.get('/getLineups', async (req, res) => {
  try {
    const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures/lineups', {
      params: { fixture: '215662' },
      headers: {
        'X-RapidAPI-Key': 'eb9d613001msh2580e8cafc2f210p10e30djsnbaf8b97932a8',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });

    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
