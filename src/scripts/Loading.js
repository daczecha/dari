export function loading(){
    isLoading = !isLoading;    
    if(isLoading === true){
        document.getElementById('loading').style.display = 'flex';
        document.getElementById('app').classList.add('hide');
    }else{
        document.getElementById('loading').style.display = 'none';
        document.getElementById('app').classList.remove('hide');
    }
}

let isLoading = false;