    
    var faker = require('faker')

    export default {

        dados: function () {

        var firstName = faker.name.firstName()
    


        var data = {

            nome: `${firstName}`,
            email: faker.internet.email(firstName),


        }
        
        return data
    }

    
}