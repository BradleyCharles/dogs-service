/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return;
  }

  @Post()
  create(): string {
    return;
  }

  @Put(':id')
  update() {
    return;
  }

  @Delete(':id')
  remove() {
    return;
  }
}
