import { Body, Controller, Get, Post } from '@nestjs/common'
import { DutiesService } from './duties.service'
import { CreateDutyDto } from './dto/create-duty.dto'
import { DutyDocument } from './schemas/duty.schema'

@Controller('duties')
export class DutiesController {
  constructor(private readonly dutiesService: DutiesService) {}

  @Get()
  findAll(): Promise<DutyDocument[]> {
    return this.dutiesService.findAll()
  }

  @Post()
  async create(@Body() createDutyDto: CreateDutyDto) {
    console.log(`createDutyDto`, createDutyDto)
    await this.dutiesService.create(createDutyDto)
  }
}
