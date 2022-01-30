const userModel = require('../models/user.model')

exports.create = async (req, res) => {
    try {
        let cred = {
            fname: req.body.fname,
            lname: req.body.lname,
            bio: req.body.bio,
            updatedAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }),
            createdAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }),
            isDeleted: false
        }

        if (!cred.fname || !cred.lname) return res.sendStatus(304)

        let data = await userModel.create_user(cred)
        return res.status(200).send(`created ${data.fname} ${data.lname} successfully!`)


    } catch (err) {
        res.sendStatus(503)
    }
}

exports.update = async (req, res) => {
    try {
        let id = req.body.userId
        let data = req.body.data
        let updateTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })

        await userModel.update(id, data, updateTime)

        return res.status(200).send(`updated data for user ${id}.`)
    } catch (err) {
        console.log(err);
        res.sendStatus(503)
    }
}

exports.delete = async (req, res) => {
    try {
        let id = req.body.userId
        let updateTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })

        await userModel.delete(id, updateTime)

        return res.status(200).send(`updated data for user ${id}.`)
    } catch (err) {
        console.log(err);
        res.sendStatus(503)
    }
}