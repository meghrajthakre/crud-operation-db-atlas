const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://meghraj:ykaja46hMiglM2mT@loginserver.eizxxhd.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to atlas server...");
    })
    .catch((err) => {
        console.log("connection error: " + err);
    })
// ykaja46hMiglM2mT