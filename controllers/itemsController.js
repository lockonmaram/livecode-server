const Item = require('../models/item')
const jwt = require('jsonwebtoken')

class ItemController {
  static addItem(req, res){
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY, function(err,decoded){
      console.log(decoded);
      Item.create({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        tags: req.body.tags,
        user: decoded.id
      })
      .then(item=>{
        res.status(201).json({
          _id: item._id,
          name: item.name,
          price: item.price,
          stock: item.stock,
          tags: item.tags,
          user: item.user
        })
      })
      .catch(err=>{
        res.status(400).json({
          success: false,
          message: err.errmsg
        })
      })
    })
  }
  static getItems(req, res){
    let name = req.query.name;
    let price = req.query.price;
    let tag = req.query.tag;
    Item.find({})
    .then(items=>{
      res.status(200).json(items)
    })
    .catch(err=>{
      res.status(400).json({
        success: false,
        message: err.errmsg
      })
    })
  }
  static getItemsByName(req, res){
    Item.find({ name: req.params.name })
    .then(items=>{
      res.status(200).json(items)
    })
    .catch(err=>{
      res.status(400).json({
        success: false,
        message: err.errmsg
      })
    })
  }
  static getItemsByTag(req, res){
    Item.find({ name: req.params.tag })
    .then(items=>{
      res.status(200).json(items)
    })
    .catch(err=>{
      res.status(400).json({
        success: false,
        message: err.errmsg
      })
    })
  }
}

module.exports = ItemController
