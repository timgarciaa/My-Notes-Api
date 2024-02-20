/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type NextFunction, type Request, type Response } from "express";
import { type Note } from "../types/index";
import * as NoteServices from "../services";

export function createNote(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const record: Note = req.body;
    const result = NoteServices.createNote(record);
    res.status(200).json({
      ...result,
    });
    next();
  } catch (e: any) {
    res.status(400).json({
      error: e.issues[0].message || e,
    });
  }
}

export function getNotes(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const result = NoteServices.getNotes();
    res.status(200).json({
      notes: result,
    });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
}

export function getNote(req: Request, res: Response, next: NextFunction): void {
  try {
    const id: number = Number(req.params.id);
    const result = NoteServices.getNote(id);

    if (typeof result === "string") {
      res.status(404).json({
        result,
      });
    } else {
      res.status(200).json({
        ...result,
      });
    }
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
}

export function updateNotes(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id: number = Number(req.params.id);
    const record: Note = { id, ...req.body };
    const result = NoteServices.updateNote(record);

    if (typeof result === "string") {
      res.status(404).json({
        result,
      });
    } else {
      res.status(200).json({
        ...result,
      });
    }
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
}

export function deleteNotes(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id: number = Number(req.params.id);
    const result = NoteServices.deleteNote(id);

    res.status(result.status).json({
      result: result.message,
    });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
}
