// const mongoose = require('mongoose');

// // const url = "mongodb://localhost:27017/Login-tut";
// const url = "mongodb+srv://virajvala013:Hellocpp1@@testclusterviraj.gqrz7wk.mongodb.net/?retryWrites=true&w=majority&appName=TestClusterViraj";
// mongoose.connect(url);

// const loginSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// })

// const Login = mongoose.model('users', loginSchema);

// module.exports = Login;

// //mongodb+srv://virajvala013:Hellocpp1@@testclusterviraj.gqrz7wk.mongodb.net/?retryWrites=true&w=majority&appName=TestClusterViraj


const mongoose = require('mongoose');

// Corrected connection string
//nexusinfo, nexusinfo123
const url = "mongodb+srv://abcuser:123abc@abccluster.xl5kri2.mongodb.net/abcproject";

mongoose.connect(url);

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
});

const Login = mongoose.model('users', loginSchema);

module.exports = Login;
