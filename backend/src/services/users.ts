import { Request, Response } from "express";
import { Service } from "typedi";
import axios from "axios";
import moment from "moment";
import { getRepository } from "typeorm";
import { User } from "../models/users.model";

@Service()
export default class UsersService {
  constructor() {}

  public async Create(req: Request, res: Response) {
    try {
      const versionRepository = getRepository(User);

      const data = await versionRepository.save(req.body);

      if (data.affected === 0) {
        return res.status(500).json({
          status: false,
          code: 500,
          message: "Ocurrió un error",
        });
      }

      return res.status(200).json({
        status: true,
        code: 200,
        message: "Creado correctamente",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        status: false,
        code: 500,
        message: "Ocurrió un error",
        data: e,
      });
    }
  }

  public async UpdateProcess(req: Request, res: Response) {
    try {
      const versionRepository = getRepository(User);

      if (req.body.process.length > 0) {
        for (let index = 0; index < req.body.process.length; index++) {
          const element = req.body.process[index];

          const data = await versionRepository.update(
            { id: element.id },
            {
              process: !element.process,
            }
          );

          if (data.affected === 0) {
            return res.status(500).json({
              status: false,
              code: 500,
              message: "Ocurrió un erroral actualizar el id: " + element,
            });
          }
        }
      }

      return res.status(200).json({
        status: true,
        code: 200,
        message: "Actualizado correctamente",
      });
    } catch (e) {
      return res.status(500).json({
        status: false,
        code: 500,
        message: "Ocurrió un error",
        data: e,
      });
    }
  }

  public async GetAll(req: Request, res: Response) {
    try {
      const versionRepository = getRepository(User);

      const data = await versionRepository.find();

      if (data.length === 0) {
        return res.status(404).json({
          status: false,
          code: 404,
          message: "No existen elementos",
        });
      }

      return res.status(200).json({
        status: true,
        code: 200,
        message: "Users",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        status: false,
        code: 500,
        message: "Ocurrió un error",
        data: e,
      });
    }
  }
}
