## Projekt zaliczeniowy

### Opis funkcjonalności

1. sklep internetowy z funkcją płatności demo 
2. Apteka - refundacja leków, możliwość zakupu leków z recepty i takich bez recepty
3. sklep internatowy z kodami rabatowymi 

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

