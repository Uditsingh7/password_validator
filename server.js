const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Access the page at this route
app.get('/', (req, res) => {
    res.render('index');
});


// Server started on
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
