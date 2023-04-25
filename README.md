### Hexlet tests and linter status:
[![Actions Status](https://github.com/SergeyRevyagin/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/SergeyRevyagin/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/359cdf31205554b21907/maintainability)](https://codeclimate.com/github/SergeyRevyagin/frontend-project-44/maintainability)

# Игры разума (JavaScript)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

Игры:
- Определение четного числа.
- Определение простого числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение наибольшего общего делителя.


## Установка

```
$ sudo npm link 
```

## Игра: "Проверка на четность"

Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры

```
$ brain-even
```  

#### Пример игры

### Game "brain-even"
[![asciicast](https://asciinema.org/a/yYAD0Vs6jawRyoii9yHzU0jkK.svg)](https://asciinema.org/a/yYAD0Vs6jawRyoii9yHzU0jkK)


## Игра: "Калькулятор"

Суть игры в следующем: игроку показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.

#### Запуск игры

```
$ brain-calc
```  

#### Пример игры

### Game "brain-calc"
[![asciicast](https://asciinema.org/a/tTdpjcqhaloXbTVJhYxdq1JJM.svg)](https://asciinema.org/a/tTdpjcqhaloXbTVJhYxdq1JJM)


## Игра: "НОД"

Суть игры в следующем: игроку показывается два случайных числа, например, **25 50**. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.

#### Запуск игры

```
$ brain-gcd
```  

#### Пример игры

### Game "brain-gcd"
[![asciicast](https://asciinema.org/a/DqHdeeQ0tlA5n0KVmTkxGv5IK.svg)](https://asciinema.org/a/DqHdeeQ0tlA5n0KVmTkxGv5IK)

## Игра: "Арифметическая прогрессия"

Суть игры в следующем: игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен отгадать число, которое находится за точками.

#### Запуск игры

```
$ brain-progression
```  

#### Пример игры

### Game "brain-progression"
[![asciicast](https://asciinema.org/a/m5lWNMIMMmKoKBFCKv41h87OK.svg)](https://asciinema.org/a/m5lWNMIMMmKoKBFCKv41h87OK)


## Игра: "Простое ли число?"

Суть игры в следующем: игроку показывается случайное число. Ему нужно ответить **yes**, если число простое, или **no** — если нет.

#### Запуск игры

```
$ brain-prime
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/qX1hViOVyWfe5y6vZVCg54nix.svg)](https://asciinema.org/a/qX1hViOVyWfe5y6vZVCg54nix)