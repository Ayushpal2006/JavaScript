function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Wether Data Fetch .....");
            resolve(200);
        },2000)
    });

}

async function getWeatherData(){
    await api();
    await api();
}

// api().then(()=>{
//     console.log("Data ...........");
// })