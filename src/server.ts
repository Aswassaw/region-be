import express from "express";
import dotenv from "dotenv";
import ProvinceRoute from "./routes/ProvinceRoute";

async function start(): Promise<void> {
  try {
    dotenv.config();

    const app: express.Express = express();
    const PORT: string = process.env.APP_PORT || "5000";

    app.use(express.json());

    app.use("/api/v1", ProvinceRoute);

    app.listen(PORT, () => {
      console.log(`Server listen on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
