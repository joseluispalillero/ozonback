import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon/?limit=2000')
      .pipe(map((response) => response.data));
  }

  findById(id) {
    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon/' + id)
      .pipe(map((response) => response.data));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
