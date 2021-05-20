import { Schema, SchemaOptions, ObjectId, model } from 'mongoose';

const options: SchemaOptions = {
    collection: 'players',
};

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        discordId: String,
        activeCharacter: {
            type: String,
            required: false,
        },
    },
    options
);

export default model('Player', schema);
