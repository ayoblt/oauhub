import { Injectable } from '@nestjs/common';
import { MAX_FILE_SIZE } from '@oauhub/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return `max file size is: ${MAX_FILE_SIZE}`;
  }
}
