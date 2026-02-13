const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ab saara route route me banaye ge ab yaha app.use use karege 
// app.get('/', (req, res) => {
//   res.render('index');
// });
app.use('/user', userRoutes);
app.listen(3000, () => {
  console.log('Server is  running  on port 3000!');
});