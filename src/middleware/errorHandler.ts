import type { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  status: number = 500;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: err.status,
  });
};
