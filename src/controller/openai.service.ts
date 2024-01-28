import { Injectable } from "@nestjs/common";
import axios from "axios";
import OpenAI from "openai";

@Injectable()
export class OpenaiService {
  async sendMail(role: any, text: String) {
    const response = await axios.get(
      "https://65b62199da3a3c16ab003f97.mockapi.io/api/messages"
    );
    const openai2 = new OpenAI({
      apiKey: "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",
    });
    let airole =
      "Ты девушка, квалифицированный онлайн гид Асима, помогающий клиенту страховой компании(Halyk Life). И ты должна отвечать только как консультант. (если у тебя спрашивают конкретную цену о услуге и тд, то придумай от себя).  \n";

    console.log(response.data);
    let history = "";
    if (response) {
      response.data.forEach((element) => {
        if (element.is_ia) {
          history += "(Асима) " + element.message;
        } else {
          history += "(Пользователь) " + element.Message;
        }
      });
    }
    console.log(history);
    if (history !== "") {
      airole +=
        "Воспользуйся информацией ниже что бы предотвратить повторении информации {" +
        history +
        "}";
    }
    const completion = await openai2.chat.completions.create({
      messages: [
        {
          role: "system",
          content: airole,
        },
        {
          role: role,
          content: text + "(максимум 70 слов)",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
  }
}
