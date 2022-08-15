const url = 'http://localhost:6543/professionals'

function get() {
    const table = getTable();

    let ID_url = `http://localhost:6543/professionals?id=${document.querySelector('#id').value} `
    
    let params = 
    {
        headers: {'content-type': 'application/json'},
        method: 'GET'
    }

    fetch (ID_url && ID_url.length > 0 ? ID_url : url, params) //envio la request a la api
    .then((data) => {
       return data.json() //cuando me devuelva la response extraigo los datos del body
    })
    .then((result) => { //y los proceso aqui
        if(!result.error){

            console.log(result.message);

            //pongo la cabecera

            table.innerHTML = 
            `
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Color de ojos</th>
                <th>Raza</th>
                <th>Retirado</th>
                <th>Profesion</th>
                <th>Oscars</th>
            </tr>
            `
            //relleno

            if(result.data.length){

                result.data.forEach(item => {

                  table.innerHTML += 
                    `<tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.genre}</td>
                        <td>${item.height}</td>
                        <td>${item.weight}</td>
                        <td>${item.eyeColor}</td>
                        <td>${item.race}</td>
                        <td>${item.isRetired}</td>
                        <td>${item.profession}</td>
                        <td>${item.oscarsNumber}</td>
                    </tr>
                    `  
                });

            }else {
                table.innerHTML += 
                    `<tr>
                        <td>${result.data.name}</td>
                        <td>${result.data.age}</td>
                        <td>${result.data.genre}</td>
                        <td>${result.data.weight}</td>
                        <td>${result.data.height}</td>
                        <td>${result.data.eyeColor}</td>
                        <td>${result.data.race}</td>
                        <td>${result.data.isRetired}</td>
                        <td>${result.data.profession}</td>
                        <td>${result.data.oscarsNumber}</td>
                    </tr>
                    ` 
            } 
        }else{  
            alert('ERROR: ' + result.message);
        }
    })

    document.querySelector('form').reset();
}

function post() {
    const professional = getFormData();
    console.log(professional);


    if(validate(professional)){

        const params =
        {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(professional),
            method: 'POST'
        }

        
        fetch(url, params) //envio la request

        .then((data) => { 
            return data.json();
        }).then((result) => {
            if(!result.error){
                alert(result.message);
            }else{
                alert(result.error);
            }
        })
        

    }

    get()

}

function put() {
    const professional = getFormData();
    console.log(professional);

    let request_body = JSON.parse( JSON.stringify(professional) )
    request_body.id = document.querySelector('#id').value;
    

    if(parseInt(request_body.id) != NaN){


        console.log('xxxxxxxxx' + JSON.stringify(request_body));


        const params =
        {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(request_body),
            method: 'PUT'
        }

        
        fetch(url, params) //envio la request

        .then((data) => { 
            return data.json();
        }).then((result) => {
            if(!result.error){
                alert(result.message);
            }else{
                alert(result.error);
            }
        })
        

    }

    get()


}


function del() {
    
    const request_body = { id: document.querySelector('#id').value}

    const params = 
    {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(request_body),
        method: "DELETE"
    }

    fetch(url, params)
    .then((data) => {
        return data.json();
    })
    .then((result) => {
        if(!result.error){
            alert(result.message)
        }else{
            alert('ERROR: ' + result.message)
        }
    })

    get()

}

function getTable(){
    return document.querySelector('table')
}

function getFormData(){
    let data = document.querySelectorAll('input[type=text]');
    
    let return_value =  new Professional(
        data[1].value,
        data[2].value,
        data[3].value,
        data[4].value,
        data[5].value,
        data[6].value,
        data[7].value,
        data[8].value,
        data[9].value,
        data[11].value,
        data[10].value,
    )

    console.log(return_value);

    return return_value
}

function validate(professional){
    let result = true;

    if(professional.name.length == 0 || professional.age.length == 0 ||
        professional.genre.length == 0 || professional.weight.length == 0 ||
        professional.height.length == 0 || professional.eyeColor.length == 0 ||
        professional.race.length == 0 || professional.isRetired.length == 0 ||
        professional.nationality.length == 0 || professional.oscarsNumber.length == 0)
    {
        result = false
    }

    return result
}