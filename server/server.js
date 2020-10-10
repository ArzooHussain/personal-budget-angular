const express = require('express');
const app = express();
const port = 3000; 
const budget = require('./step3.json');
const cors = require('cors')
app.use(cors())

app.use('/', express.static('public'));

/* const budget = { 
 myBudget:[
    {
        title:'Eat out',
        budget: 25
    },
    {
        title:'Rent',
        budget: 750
    },
    {
        title:'Grocery',
        budget: 110
    },
  ]
}; */

app.get('/hello', (reg, res)=> {
    res.send('Hello World!');
});

app.get('/budget', (reg, res)=> {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});