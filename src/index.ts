import app from './app';
import './database'

app.listen(app.get('port'), () => {
    console.log('server en port', app.get('port'));
});