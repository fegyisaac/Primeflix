const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3",
    API_KEY: "437c1ac2cfd587f727df594e366d859f",
    // URL : baseUrl + "" + API_KEY,
    w500Img:`https://image.tmdb.org/t/p/w500`,
    // w500Img: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;


// const date = "2023-11-09"
// const timeStamp = new Date(date).getTime()
// const day = new Date(timeStamp).getDate()
// const month = new Date(timeStamp).getMonth() + 1;
// const months = new Date(timeStamp).toLocaleString("default", {month: "short"});

// const year = new Date(timeStamp).getFullYear()

// console.log(months);
