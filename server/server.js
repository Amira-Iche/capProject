const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

// const corsOptions = {
//     origin: "http://localhost:3001"
// };



// parse requests of content-type - application/json
app.use(express.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/contract.routes")(app);

db.sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log("Server is running on port 3001");
    })
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

