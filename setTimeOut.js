let clock =()=> {
    setInterval(() => {
     var today = new Date();
     var date = today .getDate();
     var month = today .getMonth()+1;
     var year = today .getFullYear();
     var h = today .getHours();
     var m = today .getMinutes();
     var s = today .getSeconds();
     var div = document .getElementById ('aa');
     div . innerHTML =`${date}-${month}-${year} ${h}:${m}:${s};`

    }, 1000);
}