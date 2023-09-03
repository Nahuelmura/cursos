const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use( '/assets' ,express.static('assets',
 {etag:false,
    maxAge:'5h'

}));

app.get('/',function(req,res){
res.render('index');
});


app.listen(3000);

// if-none - match: W / "53-1893975011b"