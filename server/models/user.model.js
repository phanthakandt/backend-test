var db = require('../configs/db.config')
db.then(() => { console.log('Connecting database is fine :/'); })

const user = db.get('user')

exports.create_user = async (data) => {
    return await user.insert(data)
}

exports.check_user = async (data) => {
    return await user.find(data)
}

exports.update = async (id, data, time) => {
    return await user.update({ _id: id }, { $set: { ...data, updatedAt: time } })
}

exports.delete = async (id) => {
    return await user.update({ _id: id }, { $set: { isDeleted: true, updatedAt: time } })
}