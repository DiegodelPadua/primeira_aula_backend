
//Import do Express
const express = require ('express')

//Cria um objeto de rota para o arquivo 
const router = express.Router()

router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoGenero(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//export para o app ter acesso as todas do genero
module.exports = router