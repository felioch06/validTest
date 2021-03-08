import { Router, Request, Response } from "express";
import { Container } from "typedi";
import usersService from "../../services/users";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.post("/", async (req: Request, res: Response) => {
    const profileServiceInstance = Container.get(usersService);
    const result = await profileServiceInstance.Create(req, res);
    return result;
  });

  route.put("/", async (req: Request, res: Response) => {
    const profileServiceInstance = Container.get(usersService);
    const result = await profileServiceInstance.UpdateProcess(req, res);
    return result;
  });

  route.get("/", async (req: Request, res: Response) => {
    const profileServiceInstance = Container.get(usersService);
    const result = await profileServiceInstance.GetAll(req, res);
    return result;
  });
};
