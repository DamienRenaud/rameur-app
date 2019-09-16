import { Document } from 'mongoose';

export interface Rameur extends Document {
    readonly name: string;
    readonly school: string;
    readonly contact: string;
    readonly distance: number;
    readonly created_at: Date;
}