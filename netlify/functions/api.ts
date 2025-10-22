import express, { type Request, Response, NextFunction } from "express";
import serverless from "serverless-http";
import { storage } from "../../server/storage";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add your API routes here
// Example: app.get('/api/hello', (req, res) => res.json({ message: 'Hello!' }));

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export const handler = serverless(app);
