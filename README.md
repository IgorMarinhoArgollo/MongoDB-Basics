# MongoDB-Basics

<p>   
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
<details>
  <summary><h2>:brazil: Português</h2></summary>
  Esse foi o primeiro projeto sobre MongoDB desenvolvido no módulo backend do curso para Desenvolvedor Web Full Stack da Trybe <br><br>

   #### Descrição:
   O Projeto trata de escritas de consultas, inserções, atualizações, deleções e filtros básicos utilizando o banco de dados não relacional MongoDB.<br>
   Em função de direito de propriedade intelectual sobre o banco de dados utilizado no desenvolvimento do projeto, não é possível a apresentação do banco, dessa forma, haverá, comentado em cada query, a descrição do objetivo da query desenvolvida.<br>

      
  ## Objetivos
  O objetivo primário desse projeto foi a introdução desse conteúdo através da prática de queries.<br><br>

  ## Tecnologias usadas
  * MongoDB;
  * MongoDB for VS Code.<br><br>
  
  ## Como usar
  Em função da não disponibilidade do banco de dados, não é possível o uso de fato das queries<br><br>
  
  ## Desafios
  As queries foram desenvolvidas da pasta "challenges" e cada desafio foi elaborado em um arquivo com o nome "desafioX.js", onde X é o número do desafio.<br>
   1. Exibir a quantidade de documentos inseridos na coleção ```produtos```
   2. Exibir a coleção ```produtos``` ordenado por ```vendidos``` (exibir apenas ```nome``` e ```vendidos```).
   3. Exibir o produto mais vendido (exibir apenas ```nome``` e ```vendidos```).
   4. Exibir produtos em que os ```vendidos``` estejam entre 50 e 100 (exibir apenas ```nome``` e ```vendidos```).
   5. Exibir os produtos que tenham 36 ```curtidas``` e 85 ```vendidos```(exibir apenas ```nome```, ```vendidos``` e ```curtidas```) .
   6. Exibir ```nome``` e ```curtidas``` dos produtos que tiveram ```curtidas``` entre 10 e 100.
   7. Exibir ```nome``` e ```vendidos``` dos produtos que tenham sido vendidos em quantidades diferentes de 50 e que o ```tag``` não existe.
   8. Deletar produtos com menos de 50 ```curtidas``` e retornar o ```nome``` dos produtos restantes.
   9. Exibir todos os nomes dos produtos com menos de 500 ```calorias```.
   10. Exibir ```nome``` dos produtos que tem ```percentual``` de ```proteína``` maiores ou iguais a 30 e menores ou iguais a 40.
   11. Exibir ```nome```, ```vendidos``` e ```curtidas``` de todos os produtos exceto: "Big Mac" e "McChicken".
   12. Inserir "Ketchup" aos ```ingredientes``` para todos os produtos menos "McChicken" (garantindo não repetição) e retornar ```nome``` e ```ingredientes``` de todos os produtos.
   13. Inserir ```criadoPor``` com o valor "Ronald McDonald" e retornar ```nome``` e ```criadoPor``` de todos os produtos.
   14. Exibir todos os produtos que possuem "pickles" e limitar aos 3 primeiros resultados de ```valoresNutricionais``` (exibir apenas ```nome```, ```ingredientes``` e ```valoresNutricionais```). 
   15. Inserir campo ```avaliacao``` para todos os produtos, atribuindo 3 para os produtos que possuem a tag "ave", atribuindo 5 para os produtos que possuem a tag "bovino", atribuindo 0 para os demais e retornando o ```nome``` e ```avaliacao``` de todos os produtos.
   16. Inserir ```ultimaModificacao``` no produto "Big Mac" com o valor da data atual e retornar ```nome``` e ```ultimaModificacao``` de todos os produtos que o possuem.
   17. Criar nova coleção com o documento ```franquia``` e o valor "McDonalds" e o documento ```produtos``` com a contagem da coleção produtos.
   18. Incluir "bacon" nos ```ingredientes``` dos produtos: "Big Mac" e "Quarteirão com Queijo", então retornar ```nome``` e ```ingredientes``` de todos os produtos.
   19. Remover "cebola" dos ```ingredientes``` de todos os produtos  e retornar o ```nome``` e ```ingredientes``` de todos os produtos.
   20. Remover o primeiro ```ingredientes``` do array do "Quarteirão com Queijo" e retornar o ```nome``` e ```ingredientes``` de todos os produtos.
   21. Remover o último ```ingredientes``` do array do "Cheddar McMelt" e retornar o ```nome``` e ```ingredientes``` de todos os produtos.
   22. Inserir ```vendasPorDia``` em todos os produtos com "[0, 0, 0, 0, 0, 0, 0]"; atualizar o quarto valor para 60 apenas no produto "Big Mac"; atualizar o sétimo valor dos produtos que possuem a ```tag``` "bovino" para 120; retornar ```nome``` e ```vendasPorDia``` de todos os produtos.
   23. Inserir "combo" e "tasty" no array ```tags```, além de ordenar em ordem alfabética e retornar ```nome``` e ```tags``` de todos os produtos.
   24. Ordenar array ```valoresNutricionais``` por ```percentual``` em ordem decrescente e elaborar outra query para retornar ```nome``` e ```valoresNutricionais``` de todos os produtos.
   25. Adicionar a ```tags``` "muito sódio" caso o ```percentual``` de ```sódio``` seja maior ou igual a 40 e elaborar outra query para retornar ```nome``` e ```tags``` de todos os produtos.
   26. Adicionar a ```tags``` "contém sódio" caso o ```percentual``` de ```sódio``` seja maior do que 20 e menor do que 40 e elaborar outra query para retornar ```nome``` e ```tags``` de todos os produtos.
   27. Exibir a quantidade de produto que possuem "mc" no nome.
   28. Exibir a quantidade de produtos que possuem 4 ingredientes.
   29. Renomear o campo ```descricao``` por ```descricaoSite``` e, em outra query, retorne os campos ```nome``` e ```descricaoSite```.
   30. Remover o campo ```curtidas``` de "Big Mac" e, em outra query, retornar o ```nome``` e ```curtidas``` de todos os produtos.
   31. Exibir o ```nome``` dos produtos em que o ```curtidas``` seja maior que ```vendidos```.
   32. Exibir o ```nome``` e ```vendidos``` dos produtos em que ```vendidos``` sejam múltiplos de 5.
<br><br>
  
  ## Como contribuir no projeto
  1. Faça um **fork** do projeto;
  2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`;
  3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`;
  4. Envie as suas alterações: `git push origin my-feature`;
  5. Abra o seu pull-request na página do GitHub.<br><br>
  
  
##  Autor
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br><br>

  ## Licença
  Esse projeto está sob a licença:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
</details>

##
##  :us: English

This was the first MongoDB project developed in the backend module of the Trybe Full Stack Web Developer course <br><br>

#### Description:
The Project deals with writing queries, insertions, updates, deletions and basic filters using the non-relational database MongoDB database.<br>
Due to the intellectual property right on the database used on the development of this project, it is not possible to present the database, so there will be, commented on each query, a description of the purpose of the query developed.<br>

## Goals
The primary objective of this project was the introduction of this content through the practice of queries.<br><br>

## Used Technologies
* MongoDB;
* MongoDB for VS Code.<br><br>
  
## How To Use
Em função da não disponibilidade do banco de dados, não é possível o uso de fato das queries<br><br>

  
## Challenges
The queries are inside the folder "challenges" and each challenge was created in a file named as "challengeX.js", where X is the challenge number.<br>
  1. Display the number of documents inserted in the ```produtos``` collection.
  2. Display ```produtos``` collection sorted by ```vendidos``` (display only ```nome``` and ```vendidos```).
  3. Display the top one selling product (only display ```nome``` and ```vendidos```).
  4. Display products where ```vendidos``` are between 50 and 100 (only display ```nome``` and ```vendidos```).
   5. Display products that have 36 ```curtidas``` and 85 ```vendidos``` (only display ```nome```, ```vendidos``` and ```curtidas``` ) .
   6. Display ```nome``` and ```curtidas``` of products that have between 10 and 100```curtidas```.
   7. Display ```nome``` and ```vendidos``` of products that have ```vendidos``` other than 50 and ```tags``` does not exist.
   8. Delete products with less than 50 ```curtidas``` and return ```nome``` of the remaining products.
   9. Display all products: ```nome```, under 500 ```calorias```.
   10. Display ```nome``` of products that have ```percentagem``` of ```proteína``` greater than or equal to 30 and less than or equal to 40.
   11. Display ```nome```, ```vendidos``` and ```curtidas``` of all products except: "Big Mac" and "McChicken".
   12. Insert "Ketchup" to ```ingredientes``` for all products except "McChicken" (ensuring no repetition) and return ```nome``` and ```ingredientes``` for all products.
   13. Insert ```criadoPor``` with the value "Ronald McDonald" and return ```nome``` and ```criadoPor``` of all products.
   14. Display all products that have "pickles" and limit to the first 3 results of the array ```valoresNutricionais``` (display only ```nome```, ```ingredientes``` and ```valoresNutricionais`` `).
   15. Insert ```avaliacao``` field for all products, assigning 3 to products that have the tag "ave", assigning 5 to products that have the tag "bovino", assigning 0 to others and returning ```nome``` and ```avaliacao``` of all products.
   16. Insert ```ultimaModificacao``` in "Big Mac" product with the current date value and return ```nome``` and ```ultimaModificacao``` of all products that have it.
   17. Create a new collection with the document ```franquia``` and the value "McDonalds" and the document ```produtos``` with the count of the produtos collection.
   18. Include "bacon" in the ```ingredientes``` of the products: "Big Mac" and "Quarteirão com Queijo", then return ```nome``` and ```ingredientes``` of all products.
   19. Remove "cebola" from ```ingredientes``` of all products and return ```nome``` and ```ingredientes``` of all products.
   20. Remove the first ```ingredientes``` from the "Quarteirão com Queijo" ingredient's array and return the ```nome``` and ```ingredientes``` of all products.
   21. Remove the last ```ingredientes``` from the "Cheddar McMelt" ingredient's array and return the ```nome``` and ```ingredientes``` of all products.
   22. Insert ```vendidosPorDia``` in all products with "[0, 0, 0, 0, 0, 0, 0]"; update the 4th value to 60 in "Big Mac"; update the 7th value of products that have ```tags``` "bovino" to 120; return ```nome``` and ```vendidosPorDia``` of all products.
   23. Insert "combo" and "tasty" into ```tags``` array, in addition to sorting alphabetically and returning ```nome``` and ```tags``` for all products.
   24. Sort ```valoresNutricionais``` array by ```percentagem``` in descending order and create another query to return ```nome``` and ```valoresNutricionais``` of all products.
   25. Add to ```tags``` "muito sódio" if ```percentagem``` of ```sódio``` is greater than or equal to 40 and create another query to return ```nome``` and ```tags``` of all products.
   26. Add to ```tags``` "contém sódio" if the ```percentagem``` of ```sódio``` is greater than 20 and less than 40 and create another query to return ```nome``` and ```tags``` of all products.
   27. Display the amount of product that have "mc" in the nome.
   28. Display the amount of products that have 4 ingredientes.
   29. Rename the ```descricao``` field to ```descricaoSite``` and, in another query, return the ```nome``` and ```descricaoSite``` fields.
   30. Remove the ```curtidas``` field from "Big Mac" and, in another query, return ```nome``` and ```curtidas``` of all products.
   31. Display ```nome``` of products whose ```curtidas``` is greater than ```vendidos```.
   32. Display ```nome``` and ```vendidos``` of products where ```vendidos``` are multiples of 5.
<br><br>

## How to contribute on the project
  1. Make a **fork** of the project;
  2. Create a new branch with your changes: `git checkout -b my-feature`;
  3. Save your changes and create a commit message explaining what you have done: `git commit -m "feature: My new feature"`;
  4. Send your changes: `git push origin my-feature`;
  5. Open your pull-request on GitHub.<br><br>
  
  ##  Author
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br><br>
  
## License
  This project is under license:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>

