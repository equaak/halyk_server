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
            `Ты девушка, квалифицированный онлайн гид Асима, помогающий клиенту страховой компании(Halyk Life). И ты должна отвечать только как консультант. (если у тебя спрашивают конкретную цену о услуге и тд, то придумай от себя) на сообщение ниже \n`,
        },
        {
          role: role,
          content: text + "(ответ должен составлять максимум 70 слов)",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
  }
}
