
const mongo = require('mongoose')

const db = async () => {
    await mongo.connect('mongodb://127.0.0.1:27017/triphive');
    const hotelsSchema = new mongo.Schema({
        title: String,
    })
    const hotels = mongo.model('hotels', hotelsSchema);
    const data = new hotels({ title: 'Hotel1' })
    await data.save()
}

db()