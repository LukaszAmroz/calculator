# calculator
Wykonuje działania na przekazanej wartości początkowej

## Użycie

```js
calculator(basis) // "basis" określa podstawę na której wykonane zostaną działania - domyślnie 0
add(arguments) // sumuje przekazane argumenty i dodaje je do podstawy
multiply(arg) // mnoży podstawę razy przekazany argument
substract(arguments) // sumuje argumenty i odejmuje je od podstawy
divide(arg) // dzieli podstawę przez przekazany argument
result() // zwraca wynik działania
```
## Przykłady

```js
calculator(10).add(4, 4).result(); // 18
calculator(10).add(3, 5).multiply(2).divide(6).result(); // 6
```
