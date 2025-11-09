import e from "express";
import dotenv from "dotenv";
import cors from "cors";
import youTubeV3Router from './Routes/youTubeV3Route.js'
dotenv.config();

const app = e();
const PORT = 3000;
app.use(cors());
app.use(e.json());

app.use("/YoutubeV3API/",youTubeV3Router);

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server Started at ${PORT}`);
});
