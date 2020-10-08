const express       = require('express');
const app           = express();
const port          = process.env.PORT || 3000
const path          = require('path');
const publicDirPath = path.join(__dirname, '../public')


// As start will use express static middleware to serve up whatever in public folder
app.use(express.static(publicDirPath))
app.listen(port, () => {
  console.log(`app is running at ${port}`)
})






