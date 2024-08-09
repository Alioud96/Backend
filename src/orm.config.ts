 import {TypeOrmModuleOptions} from '@nestjs/typeorm'
 export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username: 'postgres',
    password: 'Aliou96',
    port: 5433,
    host: '127.0.0.1',
    database: 'backend-db',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
 };