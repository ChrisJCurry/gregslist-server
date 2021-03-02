import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";
import { carsService } from "../services/CarsService";

export class CarsController extends BaseController { //remember to extend base controller
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get('/:id', this.getOne)
      .post("", this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete);
  }
  async getAll(req, res, next) {
    try {
      return res.send(await carsService.find(req.query))
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
      try {
        await res.send(await carsService.findById(req.params.id))
      }catch(err) {
          console.error(err)
      }
  }
  async create(req, res, next) {
    try {
        let car = await carsService.create(req.body)
      res.status(201).send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
      try {
          res.send(await carsService.edit(req.params.id, req.body))
      }catch(err){
          console.error(err)
      }
  }

  async delete(req, res, next) {
      try {
        res.send(await carsService.delete(req.params.id))
      }catch(err) {
          console.error(err)
      }
  }
}
