import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic health check route
  app.get("/", (req, res) => {
    res.json({ message: "Trendy Incorp API is running", status: "healthy" });
  });

  app.get("/health", (req, res) => {
    res.json({ message: "Trendy Incorp API is running", status: "healthy" });
  });

  // put additional application routes here
  // prefix all routes with /api in your frontend calls

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
