const {Schema, model} = require("mongoose");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(timestamp){
                return timestamp
            }
        },
        userName: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})

const Thought = model("Thought", thoughtSchema)

module.exports = Thought;