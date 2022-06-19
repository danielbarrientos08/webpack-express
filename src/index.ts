import * as express from 'express';
import {Request, Response} from 'express';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send('Hello typescript');
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});