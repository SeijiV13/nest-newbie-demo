import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
    @Prop()
    author: string;
    @Prop()
    title: string;
    @Prop()
    introduction: string;
    @Prop()
    content: string;
    
}

export const BlogSchema  = SchemaFactory.createForClass(Blog);