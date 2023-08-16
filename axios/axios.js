axios.get('https://api.exchangerate-api.com/v4/lastest/USD')
    .then(function(response){

        console.log(response)
    })
    .catch(function(error){
        //lidar com erros
    })