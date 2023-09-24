import { Request, Response } from "express";
import { Sequelize, QueryTypes } from "sequelize";
import db from "../db/models/raw";
import { ProvinceAdd, ProvinceOutput } from "./../interface/ProvinceInterface";

class ProvinceService {
  private db: Sequelize;

  constructor(db: Sequelize) {
    this.db = db;
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const query = "SELECT * FROM provinces";
      const provinces: ProvinceOutput[] = await this.db.query(query, {
        type: QueryTypes.SELECT,
      });

      return res.status(200).json({
        data: provinces,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = parseInt(req.params.id, 10);

      const query = "SELECT * FROM provinces WHERE id=:id";
      const provinces: ProvinceOutput[] = await this.db.query(query, {
        type: QueryTypes.SELECT,
        replacements: {
          id,
        },
      });

      if (provinces.length === 0) {
        return res.status(404).json({
          error: "Data Not Found",
        });
      }

      return res.status(200).json({
        data: provinces[0],
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  async add(req: Request, res: Response): Promise<Response> {
    try {
      const { name }: ProvinceAdd = req.body;

      const query =
        "INSERT INTO provinces (name, createdAt, updatedAt) VALUES (:name, :createdAt, :updatedAt)";
      await this.db.query(query, {
        type: QueryTypes.INSERT,
        replacements: {
          name,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      return res.status(201).json({
        message: "Add Province Success",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = parseInt(req.params.id, 10);

      // cek apakah data ada
      const queryCheck = "SELECT * FROM provinces WHERE id=:id";
      const provinces: ProvinceOutput[] = await this.db.query(queryCheck, {
        type: QueryTypes.SELECT,
        replacements: {
          id,
        },
      });

      if (provinces.length === 0) {
        return res.status(404).json({
          error: "Data Not Found",
        });
      }

      // code untuk update
      const { name }: ProvinceAdd = req.body;

      const query =
        "UPDATE provinces SET name=:name, updatedAt=:updatedAt WHERE id=:id";
      await this.db.query(query, {
        type: QueryTypes.UPDATE,
        replacements: {
          name,
          updatedAt: new Date(),
          id,
        },
      });

      return res.status(201).json({
        message: "Edit Province Success",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = parseInt(req.params.id, 10);

      // cek apakah data ada
      const queryCheck = "SELECT * FROM provinces WHERE id=:id";
      const provinces: ProvinceOutput[] = await this.db.query(queryCheck, {
        type: QueryTypes.SELECT,
        replacements: {
          id,
        },
      });

      if (provinces.length === 0) {
        return res.status(404).json({
          error: "Data Not Found",
        });
      }

      // code untuk delete
      const query = "DELETE FROM provinces WHERE id=:id";
      await this.db.query(query, {
        type: QueryTypes.DELETE,
        replacements: {
          id,
        },
      });

      return res.status(200).json({
        message: "Delete Province Success",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

export default new ProvinceService(db);
