//import libraries
import express from 'express'
import { registerRoutes } from "./routes/index.mjs";
import HttpStatusCodes from "./declarations/HttpStatusCodes.mjs";

const app = express();
app.use(express.json())

app.use((err, _, res, next) => {
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});

registerRoutes(app);

app.listen(3000)