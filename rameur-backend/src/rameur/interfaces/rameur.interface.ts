import { Document } from 'mongoose';

export interface Rameur extends Document {
    readonly name: string;
    readonly contact: string;
    readonly distance: number;
    readonly created_at: Date;
}