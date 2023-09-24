import { Request, Response } from "express";
import ProvinceService from "../services/ProvinceService";

class ProvinceController {
  findAll(req: Request, res: Response) {
    ProvinceService.findAll(req, res);
  }
  findById(req: Request, res: Response) {
    ProvinceService.findById(req, res);
  }
  add(req: Request, res: Response) {
    ProvinceService.add(req, res);
  }
  edit(req: Request, res: Response) {
    ProvinceService.edit(req, res);
  }
  deleteById(req: Request, res: Response) {
    ProvinceService.deleteById(req, res);
  }
}

export default new ProvinceController();
