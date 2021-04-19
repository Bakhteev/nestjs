import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: '123mail.ru', description: 'Email' })
  readonly email: string
  @ApiProperty({ example: '123456mbkf', description: 'Пароль' })
  readonly password: string
}
