import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import axios from 'axios';

@Controller('green-api')
export class GreenApiController {
  private getApiHost(idInstance: string): string {
    return idInstance.slice(0, 4);
  }

  private formatPhone(phone: string): string {
    return phone.replace(/\D/g, '');
  }

  private validateFields(fields: { [key: string]: any }) {
    for (const [key, value] of Object.entries(fields)) {
      if (!value || String(value).trim() === '') {
        throw new BadRequestException(`Поле "${key}" не заполнено`);
      }
    }
  }

  @Post('sendMessage')
  async sendMessage(@Body() body: any) {
    const { idInstance, apiToken, phone, message } = body;
    this.validateFields({ idInstance, apiToken, phone, message });

    const formattedPhone = this.formatPhone(phone);
    const url = `https://${this.getApiHost(idInstance)}.api.greenapi.com/waInstance${idInstance}/sendMessage/${apiToken}`;

    const payload = {
      chatId: `${formattedPhone}@c.us`,
      message,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error?.response?.data || error.message };
    }
  }

  @Post('getSettings')
  async getSettings(@Body() body: any) {
    const { idInstance, apiToken } = body;
    this.validateFields({ idInstance, apiToken });

    const url = `https://${this.getApiHost(idInstance)}.api.greenapi.com/waInstance${idInstance}/getSettings/${apiToken}`;

    try {
      const response = await axios.get(url);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error?.response?.data || error.message };
    }
  }

  @Post('getStateInstance')
  async getStateInstance(@Body() body: any) {
    const { idInstance, apiToken } = body;
    this.validateFields({ idInstance, apiToken });

    const url = `https://${this.getApiHost(idInstance)}.api.greenapi.com/waInstance${idInstance}/getStateInstance/${apiToken}`;

    try {
      const response = await axios.get(url);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error?.response?.data || error.message };
    }
  }

  @Post('sendFileByUrl')
  async sendFileByUrl(@Body() body: any) {
    const { idInstance, apiToken, filePhone, fileUrl } = body;
    this.validateFields({ idInstance, apiToken, filePhone, fileUrl });

    const formattedPhone = this.formatPhone(filePhone);
    const url = `https://${this.getApiHost(idInstance)}.api.greenapi.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`;

    const payload = {
      chatId: `${formattedPhone}@c.us`,
      urlFile: fileUrl,
      fileName:
        'так как данного поля не было указано в тестовом задании , тут данный текст',
    };

    try {
      const response = await axios.post(url, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error?.response?.data || error.message };
    }
  }
}
