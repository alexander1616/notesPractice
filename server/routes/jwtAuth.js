const router = require("express").Router()

//registering

router.post("/", async(req,res) => {
    try{

        //1. destructure the req.body (name, email, password)

        //2. check if user exist (if user exist then throw error)

        //3. Bcrypt the user password

        //4. enter the new user inside db

        //5. generate jwt token

    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;