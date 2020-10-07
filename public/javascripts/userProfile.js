let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let provinciaSelect = qs('#provinciaSelect');
    let ciudadSelect = qs('#ciudadSelect');
    let inputProvincia = qs('#inputProvincia');
    let inputCiudad = qs('#inputCiudad');

    inputProvincia.addEventListener('focus',function(){
        this.style.display = 'none';
        provinciaSelect.style.display = 'block';

        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            //console.log(result)

            for (let index = provinciaSelect.options.length; index>=0; index--) {
               provinciaSelect.remove(index)
            }

            result.provincias.sort(function(prev,next){
                //return prev.id - next.id
                return prev.nombre > next.nombre
            })

            provinciaSelect.innerHTML +=`<option>Seleccione su provincia... </option>`


            result.provincias.forEach(provincia => {
                provinciaSelect.innerHTML += `<option value = ${provincia.id}>${provincia.nombre}</option>`
            })

            provinciaSelect.addEventListener('change',function(){
                this.style.display = 'none';
                inputProvincia.style.display = 'block';
                inputProvincia.value = this.options[this.selectedIndex].text
            })
        })

    })

    inputCiudad.addEventListener('focus',function(){
        this.style.display = 'none';
        ciudadSelect.style.display = 'block';
        
        fetch('https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia='+inputProvincia.value)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            console.log(result)

            for (let index = ciudadSelect.options.length; index>=0; index--) {
               ciudadSelect.remove(index)
            }

            result.localidades.sort(function(prev,next){
                //return prev.id - next.id
                return prev.nombre > next.nombre
            })

            ciudadSelect.innerHTML +=`<option>Seleccione su localidad... </option>`

            result.localidades.forEach(localidad => {
                ciudadSelect.innerHTML += `<option value = ${localidad.id}>${localidad.nombre}</option>`
            })

            ciudadSelect.addEventListener('change',function(){
                this.style.display = 'none';
                inputCiudad.style.display = 'block';
                inputCiudad.value = this.options[this.selectedIndex].text
            })
        })
    })
})