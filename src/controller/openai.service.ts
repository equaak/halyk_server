import { Injectable } from "@nestjs/common";
import OpenAI from "openai";

@Injectable()
export class OpenaiService {
  async sendMail(role: any, text: String) {
    const openai2 = new OpenAI({
      apiKey: "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",
    });
    const completion = await openai2.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Ты квалифицированный онлайн гид помогающий пользователю народного банка ",
        },
        {
          role: role,
          content: text + "(максимум 25 слов)",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
  }
}
