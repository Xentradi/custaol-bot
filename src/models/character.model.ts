import { Schema, SchemaOptions, ObjectId, model } from 'mongoose';

const options: SchemaOptions = {
    collection: 'characters',
};

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        home: String,
        location: String,
        level: {
            type: Number,
            default: 1,
        },
        race: {
            type: String,
            required: true,
        },
        stats: {
            type: Map,
            of: Number,
        },
        player: {
            type: String,
            required: false,
        },
    },
    options
);

export default model('Character', schema);
