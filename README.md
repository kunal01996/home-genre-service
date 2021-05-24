# To install Dependenncies
npm install
# Run the following command to run the app in dev mode
npm start

# Create new genre
Method - POST
url - BaseURL + /api/v1/genre

Body  {
  name: "",
  description: ""
}

# Delete Record API
Method - Delete
url - BaseURL + /api/v1/genre?name=

Params -> name

# Retrive Data
 Method - GET
 url - BaseURL + /api/v1/genre?name=

Query Params optional

 # To Run test case
 npm run test
 