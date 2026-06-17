import {Body, Controller, Get, Post, Param, Put} from '@nestjs/common';
import {EquipmentService} from './equipment.service';
import {CreateEquipmentDto} from './dto/create-equipment.dto';
import {UpdateEquipmentDto} from './dto/update-equipment.dto';

@Controller('equipment')
export class EquipmentController {

    constructor(
        private readonly equipmentService: EquipmentService,
    ) {}

    // função de requisição GET
    @Get()
    async getAllEquipment() {
        return this.equipmentService.findAll();
    }

    // função para buscar cada equipamento cadastrado pelo id
    @Get(':id')
    async getEquipmentById(
        @Param('id') id: string,
    ) {
        return this.equipmentService.findOne(Number(id));
    }

    // função para criar um novo quipamento
    @Post()
    async createEquipment(
        @Body() createEquipmentDto: CreateEquipmentDto,
    ) {
        return this.equipmentService.create(createEquipmentDto);
    }

    // função para atualizar um equipamento já existente
    @Put(':id')
    async updateEquipment(
        @Param('id') id: string,
        @Body() updateEquipmentDto: UpdateEquipmentDto,
    ) {
        return this.equipmentService.update(
            Number(id),
            updateEquipmentDto,
        );
    }
}