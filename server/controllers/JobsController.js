import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";

export class JobsController extends BaseController { //remember to extend base controller
  constructor() {
    super("api/jobs");
    this.router
      .get("", this.getAll)
      .get('/:id', this.getOne)
      .post("", this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete);
  }
  async getAll(req, res, next) {
    try {
      return res.send(await jobsService.find(req.query))
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
      try {
        await res.send(await jobsService.findById(req.params.id))
      }catch(err) {
          console.error(err)
      }
  }
  async create(req, res, next) {
    try {
        let car = await jobsService.create(req.body)
      res.status(201).send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
      try {
          res.send(await jobsService.edit(req.params.id, req.body))
      }catch(err){
          console.error(err)
      }
  }

  async delete(req, res, next) {
      try {
        res.send(await jobsService.delete(req.params.id))
      }catch(err) {
          console.error(err)
      }
  }
}
