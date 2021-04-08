import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type DutyDocument = Duty & Document

@Schema()
export class Duty extends Document {
  @Prop([Number])
  gammer: number[]

  @Prop([Number])
  onDuty: number[]

  @Prop()
  createDate: string
}

export const DutySchema = SchemaFactory.createForClass(Duty)
