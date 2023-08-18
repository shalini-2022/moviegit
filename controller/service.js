const mongoose=require('mongoose')
const userschema=new mongoose.Schema(
   {
    
        plot: String,
        genres: String,
        runtime: Number,
        cast: String,
        poster: String,
        title: String,
        fullplot: String,
        languages: String,
        released: Date,
        directors: String,
        rated: String,
        awards: {
            wins: Number,
            nominations: Number,
            text: String
        },
    lastupdated: Date,
        year: Number,
    imdb: {
            rating: Number,
            votes: Number,
            id: Number
        },
        countries: String,
        type: String,
        tomatoes: {
            viewer: {
                rating: Number,
    numReviews: Number,
                meter: Number
            },
            fresh: Number,
            critic: {
                rating: Number,
    numReviews: Number,
                meter: Number
            },
            rotten: Number,
    lastUpdated: Date
        }
    }
    
)
const collect= mongoose.model('user',userschema)
const saveuser= async(data)=>
{
    const save= new collect(data)
    const savedetails= await save.save()
    return savedetails 
}
const movie=async(data)=>
{
    const year= await collect.find({year:data.year})
    return year
}
const run=async(data)=>
{
    const runtime=await collect.find({runtime:{$gt:120}})
    return runtime
}
const director=async(data)=>
{
    const dir=await collect.find({directors:data.directors})
    return dir
}
const country=async(data)=>
{
    const cou=await collect.find({countries:data.countries})
    return cou
}
const rate=async(data)=>
{
    const rated=await collect.find({rated:data.rated})
    return rated
}
const rating=async(data)=>
{
    const rate=await collect.find({rated:{$gt:7}})
    return rate
}
const tomato=async(data)=>
{
    const rate=await collect.find({"imdb.rating":{$gt:8}})
    return rate
}
const imdb=async(data)=>
{
    const vote=await collect.find({"imdb.votes":{$gt:1000}})
    return vote
}
const movies=async(data)=>
{
    const find=await collect.find({"tomatoes.viewer.rating":{$gt:4}})
    return find  
}
const genres=async(data)=>
{
    const find=await collect.find({genres:data.genres})
    return find
}
const award=async(data)=>
{
    const find=await collect.find({"awards.wins":{$gt:2}})
    return find
}
const login= async(data)=>
{
    const userlogin = await collect.find({"awards.nominations":{$gt:0}},{"title":1,"languages":1,"released":1,
"directors":1,"writer":1,"awards":1,"year":1,"geners":1,"runtime":1,"cast":1,"countries":1})
    return userlogin
}
const cast=async(data)=>
{
    const find=await collect.find({cast:data.cast},{"title":1,"languages":1,"released":1,"directors":1,
    "writers":1,"awards":1,"year":1,"genres":1,"runtime":1,"cast":1,"countries":1})
    return find
}
const release=async(data)=>
{
    const find=await collect.find({released:data.released},{"title":1,"languages":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const title=async(data)=>
{
    const find=await collect.find({title:data.title},{"title":1,"languages":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const tomatoes=async(data)=>
{
    const find=await collect.find({"tomatoes.viewer.rating":{$lt:4}},{"title":1,"languages":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const data=async(data)=>
{
    const find=await collect.find({"year":{$gt:2005}},{"title":1,"languages":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const data1=async(data)=>
{
    const find=await collect.find({"fullplot":/love/i},{"title":1,"languages":1,"plot":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const data2=async(data)=>
{
    const find=await collect.find({"plot":/journey/i},{"title":1,"languages":1,"plot":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const data3=async(data)=>
{
    const find=await collect.find({"fullplot":/justice/i},{"title":1,"languages":1,"plot":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const data4=async(data)=>
{
    const find=await collect.find({"runtime":{$lt:120}},{"title":1,"languages":1,"plot":1,"released":1,"directors":1,
    "writers":1,"countries":1})
    return find
}
const get21=async(data)=>
{
    const find=await collect.find({"imdb.rating":{$gt:8}},{"title":1,"languages":1,"runtime":1,"directors":1,
    "released":1,"directors":1, "writers":1,"countries":1,"imdb":1})
    return find
}
module.exports=
{
    saveuser,
    movie,
    run,
    director,
    country,
    rate,
    rating,
    tomato,
    imdb,
    movies,
    genres,
    award,
    login,
    cast,
    release,
    title,
    tomatoes,
    data,
    data1,
    data2,
    data3,
    data4,
    get21
}
