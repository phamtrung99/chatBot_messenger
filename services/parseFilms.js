
const listGenericFilmCard = async(func) => {
    const arrdata = await func();
    var arrCard = [];
    let i = 0;
    arrdata.forEach((obj)=>{
        let genericCard = { 
            "title": `${obj.title}`,
            "image_url": `${process.env.IMAGE_URL}${obj.poster_path}`,
            "subtitle": `${obj.release_date}`,
        }
        i++;
        if(i<10) arrCard.push(genericCard);
    })
    return arrCard;
}

module.exports = listGenericFilmCard;