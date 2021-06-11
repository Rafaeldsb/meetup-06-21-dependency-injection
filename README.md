# Dependency Injection

## O que é Injeção de Dependência?
É uma técnica para remover o acoplamento ou dependência direta entre objetos.

> SOLI**D**
> D: Dependency Inversion Principle

## Implementação

Pode ser feito tanto na mão quanto com um auxílio de libs de terceiros.

A maioria das libs de terceiros oferecem recursos extras que auxiliam muito a gerenciar o ciclo de vida da dependência.

### Bibliotecas
- Inversify: https://github.com/inversify/InversifyJS/blob/master/wiki/scope.md
- tsryng: https://github.com/microsoft/tsyringe

## Relação com outros Patterns:
Injeção de Dependência pode ser usado com inúmeros patterns, mas um que se destaca demais no uso cotidiano é o Repository Pattern, onde o serviço que o utiliza depende unicamente de sua abstração e a implementação é injetada.

Certas libs também auxiliar bastante na abstração de Singletons, até mesmo impedindo que um Singleton tenha múltiplas responsabilidades.


## Escopos
Temos principalmente 3 tipos de escopos para utilizar com injeção de dependência, _onde cada lib podem dar nomes diferentes para eles_.

- Transient Scope: Cada pedido da dependência será gerado um novo objeto para ele.
- Singleton Scope: Cada pedido da dependência será sempre o mesmo objeto gerado na primeira vez.
- Request Scope: Cada pedido da dependência será dado o mesmo objeto dentro do mesmo escopo. Outros pedidos com o `.get()` serão gerados novos.

## Multi-Injection
Muitas libs permitem o uso de múltiplas injeções de dependência com o mesmo token de identificação, isso auxilia muito para quando precisa de uma abstração do que será utilizado que sejam da mesma categoria, como módulos, interceptors, middlewares etc.