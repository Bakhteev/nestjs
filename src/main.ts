import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Прохождения курса по продвинутому BACKEND')
    .setDescription('Документация REAS API')
    .setVersion('1.0.0')
    .addTag('Bakhteev')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`server stated on PORT ${PORT}`))
}

start()
