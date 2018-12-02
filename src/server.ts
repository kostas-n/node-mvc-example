import app from "./app";
const port = 5000;
const hostname = '127.0.0.1';

app.use(function (req, res, next) {
	res.status(404).send('Sorry cant find that!');
});

app.listen(port, hostname, function() {
  console.log('Express server listening on port ' + port);
});