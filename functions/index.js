const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let voltRef = admin.database().ref('/volttable');
exports.add = functions.https.onRequest((request, response) => {
    voltRef.push({
        id: request.query.id,
        voltage: request.query.voltage,
        time : request.query.time
    })
    .then(() =>
        response.send("Data Stored")
    )
    .catch((err) => {
        console.log("error" + err)
        return response.send("500");
    })
});
