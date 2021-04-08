import { Controller, Get } from '@nestjs/common'
import { DutiesService } from './duties.service'
import { DutyDocument } from './schemas/duty.schema'

@Controller('duties')
export class DutiesController {
  constructor(private readonly dutiesService: DutiesService) {}

  @Get()
  findAll(): Promise<DutyDocument[]> {
    return this.dutiesService.findAll()
  }
}
