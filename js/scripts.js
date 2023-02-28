/*Filtering courses depending on the category */

/*
Categories:
- 'mente-espiritu'
- 'presencia-emociones'
- 'servicio-sociedad'
- 'educacion-familia'
- 'relajacion'
- 'Escucha-plena'
- 'respiracion'
- 'cuerpo'
- 'alimentacion'
- 'todos'
*/

/*Categories Pills */
const badge_respiracion = document.getElementById("respiracion");
const badge_mente_espiritu = document.getElementById("mente-espiritu");
const badge_presencia_emociones = document.getElementById("presencia-emociones");
const badge_servicio_sociedad = document.getElementById("servicio-sociedad");
const badge_educacion_familia = document.getElementById("educacion-familia");
const badge_relajacion_profunda = document.getElementById("relajacion");
const badge_escucha_plena = document.getElementById("Escucha-plena");
const badge_cuerpo = document.getElementById("cuerpo");
const badge_alimentacion_consciente = document.getElementById("alimentacion");
const badge_todos = document.getElementById("todos");

/*List of the badges to track history */
const badge_category = document.querySelectorAll(".badge-category");

/*List of courses */
const courseList = document.querySelectorAll(".course-class");


/*Regular function */
const whatCategory = (courseItem) =>{
    return courseItem.childNodes[1].children[1].children[0].children[0].attributes["category"].value;
}

/*color function */
const colorChange = (event) =>{
    const category = event.target.id;
    for (let badge of badge_category){
        if(badge.id === category){
            badge.classList.remove("bg-light");
            badge.classList.add("bg-info");
        }else{
            badge.classList.remove("bg-info");
            badge.classList.add("bg-light");
        }
    }
}

/*Callback function */
const selectCategory = (event) =>{
    const category = event.target.id;

    for(let courseItem of courseList){
        if(whatCategory(courseItem) !== category && category !== 'todos'){
            courseItem.classList.add("inactive");
        }else if (category ==='todos'){
            courseItem.classList.remove("inactive");
        }else{
            courseItem.classList.remove("inactive");
        }
    }
    colorChange(event);
}



/*Event listener functions */
badge_respiracion.addEventListener("click",selectCategory);
badge_mente_espiritu.addEventListener("click",selectCategory);
badge_presencia_emociones.addEventListener("click",selectCategory);
badge_servicio_sociedad.addEventListener("click",selectCategory);
badge_educacion_familia.addEventListener("click",selectCategory);
badge_relajacion_profunda.addEventListener("click",selectCategory);
badge_escucha_plena.addEventListener("click",selectCategory);
badge_cuerpo.addEventListener("click",selectCategory);
badge_alimentacion_consciente.addEventListener("click",selectCategory);
badge_todos.addEventListener("click",selectCategory);


