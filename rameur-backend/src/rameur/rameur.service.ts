import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Rameur } from './interfaces/rameur.interface';
import { CreateRameurDTO } from './dto/create-rameur.dto';

@Injectable()
export class RameurService {
    constructor(@InjectModel('Rameur') private readonly rameurModel: Model<Rameur>) { }
    // fetch all rameurs
    async getAllRameur(): Promise<Rameur[]> {
        const rameurs = await this.rameurModel.find().exec();
        return rameurs;
    }
    // Get a single rameur
    async getRameur(rameurID): Promise<Rameur> {
        const rameur = await this.rameurModel.findById(rameurID).exec();
        return rameur;
    }
    // post a single rameur
    async addRameur(createRameurDTO: CreateRameurDTO): Promise<Rameur> {
        const newRameur = await this.rameurModel(createRameurDTO);
        return newRameur.save();
    }
    // Edit rameur details
    async updateRameur(rameurID, createRameurDTO: CreateRameurDTO): Promise<Rameur> {
        const updatedRameur = await this.rameurModel
            .findByIdAndUpdate(rameurID, createRameurDTO, { new: true });
        return updatedRameur;
    }
    // Delete a rameur
    async deleteRameur(rameurID): Promise<any> {
        const deletedRameur = await this.rameurModel.findByIdAndRemove(rameurID);
        return deletedRameur;
    }
}
