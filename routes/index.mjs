import auth from "./auth.mjs";
import product from "./product.mjs";

export function registerRoutes(app) {
  app.use("/auth", auth);
  app.use("/product", product);
}