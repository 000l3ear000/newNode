const app = require("express")();
const mongoose=require("mongoose");
const conn = require("./connection");
const {User} =require("./schemas")


// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.post("/login", (req, res) => {
    const { email, password } = req.headers
    const data = req.headers.name;
    if (email && password) {
        res.json({
            success: 1
        })
    }
    else {
        res.json({
            success: 0
        })
    }
})

app.post("/signup", (req, res) => {
    const { name, email, password } = req.headers
    if (email && password && name) {
        const us=new User({name:"Saad",email:"Saad",password:"Saad"})
        us.save();
        res.json({
            success: 1
        })
    }
    else {
        res.json({
            success: 0
        })
    }
})



app.listen(3000)