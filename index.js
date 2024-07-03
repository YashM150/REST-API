const express = require("express")
const USER = require("./MOCK_DATA.json")

const app= express();
const PORT = 8000;

//Routes
app.get("/users",(req,res)=>{
    let userList = '<ul>';
    USER.forEach(USER => {
        userList += `<li>${USER.first_name}</li>`;
    });
    userList += '</ul>';
    res.send(userList);
})


//api call to get all users
app.get("/api/users",(req,res)=>{
    return res.json(USER);
})



app.route("/api/users/:id")
    //api call to get selective user's information
    .get((req,res)=>{
        const id = Number(req.params.id);
        const user = USER.find((user)=>user.id===id);
        return res.json(user);
    })

    //api call to post 
    .post((req,res)=>{
    return res.json({status: 'pending'})
    })

    //api call to patch 
    .patch((req,res)=>{
        return res.json({status: 'pending'})
    })

    //api call to delete
    .delete((req,res)=>{
        return res.json({status: 'pending'})
    })



app.listen(PORT, ()=> console.log('server Started at port 8000.'))