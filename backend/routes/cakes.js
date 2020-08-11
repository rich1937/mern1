/* const express = require('express')
const router = express.Router()
const Cake = require('../models/index');

router.get('/', (req, res) => {
    Cake.find({}, (err, data) => {
        res.json(data)
    })
})

router.get('/:id',(req,res)=>{
    Cake.findById(req.params.id,(err,data)=>{
        res.json({data})
    })
})

router.delete('/:id',async (req,res)=>{
   await Cake.findByIdAndDelete(req.params.id)
   res.json({'message':'deleted'})
}
)

router.post('/',(req,res)=>{
    cake = new Cake({
       name:req.body.name,
       tiers:req.body.tiers,
       icing:req.body.icing
   })
   cake.save(()=>{
       res.json(cake)
   })
})
router.put('/:id',async (req,res)=>{
   await Cake.findByIdAndUpdate(req.params.id,req.body)
   res.json({'message':'updated'})
})
module.exports = router */