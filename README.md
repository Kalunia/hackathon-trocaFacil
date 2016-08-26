#Hackathon 

##Especialização em Engenharia de Software - Unicamp/2016

###Acessando a API

A API está hospedada no Heroku: https://trocafacil.herokuapp.com.
Estamos usando Node.js como linguagem de programaçao e MongoDB como banco de dados.
  
###Acessando os recursos

  Temos 3 recursos utilizáveis: _users_, _locations_ e _jobs_.
  A seguir, as rotas disponibilizadas:
  
  1) **Users**
    
    GET     /users            -> Retornar todos os usuários cadastrados
    POST    /users            -> Criar usuário
    GET     /users/{id}       -> Retornar usuário de ID específico
    PUT     /users/{id}       -> Atualizar usuário de ID específico
    DELETE  /users/{id}       -> Remover usuário de ID específico
    
  2) **Locations**
    
    GET     /locations            -> Retornar todos os locais cadastrados
    POST    /locations            -> Criar local
    GET     /locations/{id}       -> Retornar local de ID específico
    PUT     /locations/{id}       -> Atualizar local de ID específico
    DELETE  /locations/{id}       -> Remover local de ID específico
    
  3) **Jobs**
    
    GET     /jobs            -> Retornar todos os trabalhos cadastrados
    POST    /jobs            -> Criar trabalho
    GET     /jobs/{id}       -> Retornar trabalho de ID específico
    PUT     /jobs/{id}       -> Atualizar trabalho de ID específico
    DELETE  /jobs/{id}       -> Remover trabalho de ID específico
    
###_Schema_ os recursos

  A seguir está alguns exemplos de JSONs a serem usados nas requisições de POST, segundo a estrutura dos objetos referentes:
  
  1) **Users**
  
    { 
        "username": "pedro.grandin",
        "password_encrypted": "DF3fd2sdfryh34asfd",
        "name": "Pedro Henrique Grandin",
        "age": 24,
        "gender": "male",
        "state": "SP",
        "city": "Campinas"
    }
    
  2) **Locations**
  
    {
        "lat": "30.23",
        "lng": "-17.46"
    }
    
  3) **Jobs**
  
    {
        "name": "Caçar Pokémon",
        "description": "Ajudo a caçar Pokémon GO, indo aos lugares mais raros!",
        "user": "57bfcf88b7fa420300a8a80f",
        "location": "57bfd090b7fa420300a8a810"
    }
