window.onload = function(){
    
    createTvFromJson()
}
    

    function createTvFromJson(){

        vip_ar.forEach(function(item) {
            console.log(item);
            let tvShow = new RICHClass(item.name,item.worth,item.birth_year,item.source,item.country,item.image);
            tvShow.render();

            
        })
    }