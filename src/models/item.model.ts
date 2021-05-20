import { Schema, SchemaOptions, ObjectId, model } from 'mongoose';

const options: SchemaOptions = {
    collection: 'items',
};

const schema = new Schema(
    {
        name: String,
        description: String,
        character: String,
        quantity: Number,
    },
    options
);

export default model('Item', schema);
