import { Controller, Get } from '@nestjs/common';

@Controller('equipment')
export class EquipmentController {

    @Get()
    findAll() {
        return 'Funcionando!';
    }

}
