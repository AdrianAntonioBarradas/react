import React, { useState }  from "react";
import axios from "axios";


function Register (){
  
    
    const getCP = async () =>{
        try {
            let cp = document.getElementById("inputCp").value;
            let edo =document.getElementById("slEdo");
            let mpio =document.getElementById("slMpio");
            let col =document.getElementById("slCol");
            
            
            let formData = new FormData();

            
            if(cp.length===5 )
            {
              formData.append("cp", cp);
                const url = "http://api.masksoftco.mx/direcciones/codigo-postal";

                let result = await axios({
                    url,
                    method: 'POST',
                    dataType: 'json',
                    ContentType: 'application/json',
                    data: formData
                });
                let codPost = result.data;
                console.log(codPost);
                edo.innerHTML ="<option>" + codPost[0].estado +"</option>";
                mpio.innerHTML ="<option>" + codPost[0].municipio +"</option>";



                for(let e=0; e<codPost.length; ++e )
              {
                  col.innerHTML += "<option>" + codPost[e].colonia +"</option>";
              }
                
                let edo = 
                console.log(result)
                console.log(result.data)
                
            } else {
              edo.innerHTML="<option>...</option>";
              mpio.innerHTML="<option>...</option>";
              col.innerHTML="<option>...</option>";
            }
            
            
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="content">
            <button onClick={getCP}>Obtener</button>
            <container className="container">
        <form>
          <label>Méte tu C.P.</label>
          <input type="text"  name="cp" id="inputCp" onChange={getCP}/>
          <br />
          <label>Estado</label>
          <select
            class="form-select"
            aria-label="Default select example"
            id="slEdo"
            disabled
          >
            <option >...</option>
            
          </select>
          <br />
          <label>Mpio/Alcaldía</label>
          <select class="form-select" aria-label="Default select example" id="slMpio">
            <option >...</option>
            
          </select>
          <br />
          <label>Colonia</label>
          <select class="form-select" aria-label="Default select example" id="slCol">
            <option >...</option>
            
          </select>
        </form>
      </container>


        </div>
    );

}
export default Register;
