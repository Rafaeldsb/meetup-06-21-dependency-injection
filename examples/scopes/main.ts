import 'reflect-metadata';
import { Container, inject, injectable } from 'inversify';

@injectable()
class App {}

const container = new Container();
container.bind<App>('AppTransient').to(App).inTransientScope();
container.bind<App>('AppRequest').to(App).inRequestScope();
container.bind<App>('AppSingleton').to(App).inSingletonScope();

const appTransient1 = container.get('AppTransient');
const appTransient2 = container.get('AppTransient');

console.log('\nTRANSIENT:');
console.log('appTransient1 === appTransient2: ', appTransient1 === appTransient2); // False

const appSingleton1 = container.get('AppSingleton');
const appSingleton2 = container.get('AppSingleton');

console.log('\nSINGLETON:');
console.log('appSingleton1 === appSingleton2: ', appSingleton1 === appSingleton2); // True

@injectable()
class B {
  @inject('AppRequest') appRequest1!: App;
  @inject('AppRequest') appRequest2!: App;
  appRequest3: App = container.get('AppRequest');
  appRequest4: App = container.get('AppRequest');
}

container.bind(B).toSelf();

const b = container.get(B);
console.log('\nREQUEST:');
console.log('appRequest1 === appRequest2: ', b.appRequest1 === b.appRequest2); // True
console.log('appRequest2 === appRequest3: ', b.appRequest2 === b.appRequest3); // False
console.log('appRequest3 === appRequest4: ', b.appRequest3 === b.appRequest4); // False

console.log('\n')