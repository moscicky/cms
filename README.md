### Opis funkcjonalności
Aplikacja umożliwia proste zarządzanie listą produktów:
- listowanie produktów
- tworzenie produktów
- edytowanie produktów
- usuwanie produktów
- widok jednego produktu

Dodatkowo: 
- formularz kontaktowy

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
  ./gradlew run
  ```

3. Uruchomienie aplikacji frontend:
  ```
  cd ../frontend
  npm start
  ```

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
    

