import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateDutyDto } from './dto/create-duty.dto'
import { Duty, DutyDocument } from './schemas/duty.schema'

@Injectable()
export class DutiesService {
  constructor(
    @InjectModel(Duty.name)
    private readonly dutyModel: Model<DutyDocument>,
  ) {}

  async findAll(): Promise<DutyDocument[]> {
    return this.dutyModel.find().sort({ createDate: 1 })
  }

  async create(createDutyDto: CreateDutyDto): Promise<Duty> {
    // eslint-disable-next-line new-cap
    const createdDuty = new this.dutyModel(createDutyDto)
    return createdDuty.save()
  }
}
