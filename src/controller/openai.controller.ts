import { Body, Controller, Post } from "@nestjs/common";
import { OpenaiService } from "./openai.service";

@Controller("openai")
export class OpenaiController {
  constructor(private aiService: OpenaiService) {}

  @Post()
  sendMessage(@Body() text: String) {
    return this.aiService.sendMail("user", text);
  }
}
