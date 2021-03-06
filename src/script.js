fetch("https://jsonplaceholder.typicode.com/photos?_limit=10").
then((response) => {
    // console.log(response);
    return response.json();
}).
then((data) => {
    // console.log(data);
    // console.log(data[0].url);

    data.map((val,ind) => {
        // console.log(val.url);
        console.log(val.ind);
        key = ind;
        const imgData = document.getElementById("img_api_data");
        let imgEle = document.createElement('img');
        imgEle.src = val.url;
        imgData.appendChild(imgEle);
    });
}).
catch((error) => {
    console.log(error);
});