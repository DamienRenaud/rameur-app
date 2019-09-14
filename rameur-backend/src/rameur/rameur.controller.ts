import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { RameurService } from './rameur.service';
import { CreateRameurDTO } from './dto/create-rameur.dto';

@Controller('rameur')
export class RameurController {
    constructor(private rameurService: RameurService) { }

    // add a rameur
    @Post('/create')
    async addRameur(@Res() res, @Body() createRameurDTO: CreateRameurDTO) {
        const rameur = await this.rameurService.addRameur(createRameurDTO);
        return res.status(HttpStatus.OK).json({
            message: "Rameur has been created successfully",
            rameur
        })
    }

    // Retrieve rameurs list
    @Get('rameurs')
    async getAllRameur(@Res() res) {
        const rameurs = await this.rameurService.getAllRameur();
        return res.status(HttpStatus.OK).json(rameurs);
    }

    // Fetch a particular rameur using ID
    @Get('rameur/:rameurID')
    async getRameur(@Res() res, @Param('rameurID') rameurID) {
        const rameur = await this.rameurService.getRameur(rameurID);
        if (!rameur) throw new NotFoundException('Rameur does not exist!');
        return res.status(HttpStatus.OK).json(rameur);
    }

    // Update a rameur's details
    @Put('/update')
    async updateRameur(@Res() res, @Query('rameurID') rameurID, @Body() createRameurDTO: CreateRameurDTO) {
        const rameur = await this.rameurService.updateRameur(rameurID, createRameurDTO);
        if (!rameur) throw new NotFoundException('Rameur does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Rameur has been successfully updated',
            rameur
        });
    }

    // Delete a rameur
    @Delete('/delete')
    async deleteRameur(@Res() res, @Query('rameurID') rameurID) {
        const rameur = await this.rameurService.deleteRameur(rameurID);
        if (!rameur) throw new NotFoundException('Rameur does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Rameur has been deleted',
            rameur
        })
    }
}
