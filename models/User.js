const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        userName: { 
            type: String,
            unique: true,
            require: true,
            trim: true,
        },
        email: { 
            type: String,
            unique: true,
            require: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "This is not an valid email"],
        },
        thoughts: [{ 
            type: Schema.types.ObjectId,
            ref: "Thought",
        }],
        friends: [{ 
            type: Schema.types.ObjectId,
            ref: "User",
        }],
    }
)