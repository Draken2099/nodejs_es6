// import Users from '../models/User.model'

exports.register = (req, res) => {
    const {fname, lname, phone} = req.body
    console.log({
        name: fname,
        phone: phone
    })
    res.json({
        name: fname + ' ' + lname,
        phone: phone
    })
}

exports.login = (req, res) => {
    console.log("User is login")
    res.send("User is logging in")
}

exports.getUser = (req, res) => {
    res.json({
        message: "Get user routes"
    })
}