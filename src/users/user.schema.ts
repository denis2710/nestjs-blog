import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import { isError } from 'util';

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength:  70,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength:  84,
        // validate: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    },
    password: {
        type: String,
        select: false
    }
}, { timestamps: true })

UserSchema.pre("save", async function(next) {
    const user : any = this

    if(!user.isModified("password")) return next();

    user.password = await bcrypt.hash(user.password, 12);

    next();
} )

export { UserSchema }