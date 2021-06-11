import 'reflect-metadata';
import { Container, injectable } from 'inversify';

@injectable()
class Middleware1 {}

@injectable()
class Middleware2 {}

const APP_MIDDLEWARE = Symbol.for('APP_MIDDLEWARE');

const container = new Container();
container.bind(APP_MIDDLEWARE).to(Middleware1);
container.bind(APP_MIDDLEWARE).to(Middleware2);

const middlewares = container.getAll(APP_MIDDLEWARE);
console.log('\nMiddlewares: ', middlewares.length); // 2
console.log(middlewares, '\n');
