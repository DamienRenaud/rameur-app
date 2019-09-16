import * as mongoose from 'mongoose';

export const RameurSchema = new mongoose.Schema({
    name: String,
    school: String,
    contact: String,
    distance: Number,
    created_at: { type: Date, default: Date.now }
})