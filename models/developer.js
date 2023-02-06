const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    tech: {
        type: String,

    },

    address: {
        type: String
    },
    constactNo: {
        type: Number
    },
    employed: {
        type: Boolean,
        Boolean: false
    }

},{Timestamps : true});


const Developer = mongoose.model('Developer',developerSchema);

module.exports=Developer;