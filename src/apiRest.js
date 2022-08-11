const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Server running on http://localhost:' + app.get('port'));
})

module.exports = app;