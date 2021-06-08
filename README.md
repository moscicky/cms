## Systemy zarządzania treścią: Projekt zaliczeniowy

### Opis funkcjonalności

1. sklep internetowy z funkcją płatności demo
2. sklep z programem partnerskim, partnerzy generują linki, jak ktoś się z linku rejestruje i kupuje coś to partner sklepu dostaje prowizję
3. Apteka - refundacja leków, możliwość zakupu leków z recepty i takich bez recepty
4. sklep internatowy z kodami rabatowymi

### Technologie

#### Backend
Backend jest napisany w języku `Kotlin`, z wykorzystaniem
framework'a `Spring` i biblioteki `Spring Data REST`. 

#### Frontend 
Fronted jest napisany z wykorzystaniem framework'a `React`
oraz biblioteki `react-bootstrap` dla uzysykania bardziej 
atrakcyjnego wyglądu.

#### Baza danych
Jako bazę danych wykorzystano `MongoDB`.

### Uruchamianie 
1. Pobranie repozytorium
   ```
   git clone git@github.com:moscicky/cms.git
   ```
1. Uruchomienie bazy danych
  ```
  docker container run -p 27017:27017 mongo
  ```
2. Uruchomienie aplikacji backend:
  ```
  cd backend
  ./gradlew bootRun
  ```

3. Uruchomienie aplikacji frontend:
  ```
  cd frontend
  npm install
  npm start
  ```
4. Frontend dostępny jest na porcie `3000`, backend na porcie `8080`.
### Uwagi
- Wiadomości z formularza kontaktowego przechowywane są w bazie
  danych w kolekcji `contact`. Ich treść nie jest dostępna przez 
  API z oczywistych przyczyn.
  
### REST API
- Listowanie produktów
  
  ```
  GET localhost:8080/products
  ```

- Wyświetlenie jednego produktu
  
  ```
  GET localhost:8080/products/{product_id}
  ```

- Dodanie nowego produktu

  ```
  POST localhost:8080/products/
  Content-Type: application/json
  
  {
      "name": "...",
      "description": "...",
      "imageUrl": "..."
  }

  ```
  
- Usunięcie produktu

  ```
  DELETE localhost:8080/products/{product_id}
  ```

- Edycja produktu

  ```
  PATCH localhost:8080/products/{product_id}
  ```
    

