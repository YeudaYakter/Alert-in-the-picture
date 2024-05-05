


class RICHClass{
    constructor(_name, _worth, _birth_year,_source,_country,_image){
this.name=_name;
this.worth=_worth;
this.source=_source;
this.country=_country;
this.image=_image;
this.year=new Date().getFullYear()-_birth_year

    }
render(){
    let myDiv=document.createElement("div");
    myDiv.className = "col-md-6 border p-2";
    document.querySelector("#id_row").append(myDiv);
    myDiv.innerHTML = `
    <img src="${this.image}" alt="${this.name}"
    class="float-start me-2 w-25 myimg">
    <h2>${this.name}</h2>
    <div>compeny: ${this.source}</div>
    <div>worth: ${this.worth}</div>
    
    
    
    
    
    
    `
    
 
    let imag = myDiv.querySelector(".myimg");
    imag.addEventListener("click",function(){alert(`my age is ${this.year}`)}.bind(this));

    
}
}
