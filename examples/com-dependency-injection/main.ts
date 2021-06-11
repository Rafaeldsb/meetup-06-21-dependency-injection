import 'reflect-metadata';
import { Container } from 'inversify';
import { App } from './app';
import { UserRepository } from './user-repository';
import { MockUserRepository } from './mock-user-repository';

// Pode-se separar em outros arquivos as definições 
const container = new Container();
container.bind<UserRepository>(UserRepository).to(MockUserRepository);
container.bind<App>(App).toSelf();

const app = container.get(App);

app.execute();