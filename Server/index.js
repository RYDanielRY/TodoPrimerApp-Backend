const express = require('express');
const userRouter = require('../Server/routes/user.router');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const app = express();
app.use(express.json())
app.use('/api', cors(), userRouter)

app.use(cors());
app.listen(PORT, () => {
    console.log(`Server ${PORT}`)
});