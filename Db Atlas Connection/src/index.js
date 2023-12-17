const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
require('../db/connection')
app.use(express.json());
const userServer = require('../models/model')


app.post('/login', async (req, res) => {
    try {
        const user = new userServer(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser)
        console.log("created user....");

    } catch (error) {
        console.log(error);
    }
});

app.get('/login/user', async (req, res) => {
    try {
        const users = await userServer.find();
        res.status(200).send(users);

    } catch (error) {
        console.log(error);
    }
})
app.get('/login/user/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const users = await userServer.findById(_id);
        res.status(200).send(users);

    } catch (error) {
        console.log(error);
    }
})

app.patch('/login/user/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateUser = await userServer.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(updateUser);
        console.log("user updated", updateUser);

    } catch (error) {
        console.log(error);
    }
})

app.delete("/login/user/delete/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletUser = await userServer.findByIdAndDelete(_id, req.body);
        res.status(200).send(deletUser);
        console.log("user deleted successfully");

    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);

})