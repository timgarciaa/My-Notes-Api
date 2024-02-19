import {
  Router,
  type Response,
  type Request,
  type NextFunction,
} from "express";
import * as NotesController from "../controllers";

const api: Router = Router();

api.get("/api/health", function (req: Request, res: Response) {
  res.send("Health Check.");
});

api.post("/notes", function (req: Request, res: Response, next: NextFunction) {
  NotesController.createNote(req, res, next);
});

api.get("/notes", function (req: Request, res: Response, next: NextFunction) {
  NotesController.getNotes(req, res, next);
});

api.get(
  "/notes/:id",
  function (req: Request, res: Response, next: NextFunction) {
    NotesController.getNote(req, res, next);
  }
);

api.put(
  "/notes/:id",
  function (req: Request, res: Response, next: NextFunction) {
    NotesController.updateNotes(req, res, next);
  }
);

api.delete(
  "/notes/:id",
  function (req: Request, res: Response, next: NextFunction) {
    NotesController.deleteNotes(req, res, next);
  }
);

export default api;
