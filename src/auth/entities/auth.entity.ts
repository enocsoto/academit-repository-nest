import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Auth extends Document {
    
    @Prop({
        lowercase: true,
        minlength: 3,
        required: true,
        type: String,
        unique: true,
    })
    email: string;
    
    @Prop({
        required: true,
        type: String,
    })
    password: string;
    
    @Prop({
        required: true,
        type: String,
    })
    fullName: string;

    @Prop({
        required: true,
        type: Boolean,
        default: true,
    })
    isActive: boolean;

    @Prop({
        array: true,
        type: String,
        default:['student']
    })
    roles: string[];
}


export const AuthSchema = SchemaFactory.createForClass(Auth);
