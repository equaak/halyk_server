import { Module } from "@nestjs/common";
import { OpenaiModule } from "./controller/openai.module";

@Module({
  controllers: [],
  providers: [],
  imports: [OpenaiModule],
  exports: [],
})
export class AppModule {}
