import {Injectable} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import {CreateEquipmentDto} from './dto/create-equipment.dto';
import {UpdateEquipmentDto} from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {

    constructor(
        private readonly prisma: PrismaService,
    ) {}

    // verifica quais são todos os equipamentos/maquinas cadastrados
    async findAll() {
        return this.prisma.equipment.findMany();
    }

    // função feita para buscar os quipamentos cadastrados pelo seu ID
    async findOne(id: number) {
        return this.prisma.equipment.findUnique({
        where: {
            id: id,
        },
    });
}

    // função feita para atualizar um equipamento existente
    async update(
        id: number,
        updateEquipmentDto: UpdateEquipmentDto,
    ){

    return this.prisma.equipment.update({
        where: {
            id: id,
        },
        data: {
            nome: updateEquipmentDto.nome,
            descricao: updateEquipmentDto.descricao,
            ativo: updateEquipmentDto.ativo,
        },
    });
}

    // função feita para criar uma nova maquina/equipamento
    async create(createEquipmentDto: CreateEquipmentDto) {

        return this.prisma.equipment.create({
            data: {
                nome: createEquipmentDto.nome,
                descricao: createEquipmentDto.descricao,
                ativo: createEquipmentDto.ativo,
            },
        });

    }
}