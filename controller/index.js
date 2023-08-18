const db= require('./service')
const registration=async(req,res)=>
{
  const registerdetail = await db.saveuser(req.body)
  res.send("register successfully")
}
const user=async(req,res)=>
{
    const display=await db.movie(req.body)
    res.send(display)
}
const time=async(req,res)=>
{
    const play=await db.run(req.body)
    res.send(play)
}
const details=async(req,res)=>
{
    const find=await db.director(req.body)
    res.send(find)
}
const movie=async(req,res)=>
{
    const set=await db.country(req.body)
    res.send(set)
}
const rating=async(req,res)=>
{
    const find=await db.rate(req.body)
    res.send(find)
}
const rate=async(req,res)=>
{
    const set=await db.rating(req.body)
    res.send(set)
}
const rated=async(req,res)=>
{
    const find=await db.tomato(req.body)
    res.send(find)
}
const vote=async(req,res)=>
{
    const find=await db.imdb(req.body)
    res.send(find)
}
const rates=async(req,res)=>
{
    const find=await db.movies(req.body)
    res.send(find)
}
const find=async(req,res)=>
{
    const find=await db.genres(req.body)
    res.send(find)
}
const awards=async(req,res)=>
{
    const save=await db.award(req.body)
    res.send(save)
}
const all=async(req,res)=>
{
    const save=await db.login(req.body)
    res.send(save)
}
const castdetails=async(req,res)=>
{
    const save=await db.cast(req.body)
    res.send(save)
}
const releasedetails=async(req,res)=>
{
    const save=await db.release(req.body)
    res.send(save)
}
const titledetails=async(req,res)=>
{
    const save=await db.title(req.body)
    res.send(save)
}
const tomatodetails=async(req,res)=>
{
    const save=await db.tomatoes(req.body)
    res.send(save)
}
const released=async(req,res)=>
{
    const save=await db.data(req.body)
    res.send(save)
}
const fullplot=async(req,res)=>
{
    const save=await db.data1(req.body)
    res.send(save)
}
const plot=async(req,res)=>
{
    const save=await db.data2(req.body)
    res.send(save)
}
const justice=async(req,res)=>
{
    const save=await db.data3(req.body)
    res.send(save)
}
const runtime=async(req,res)=>
{
    const save=await db.data4(req.body)
    res.send(save)
}
const data21=async(req,res)=>
{
    const save=await db.get21(req.body)
    res.send(save)
}
module.exports=
{
    registration,
    user,
    time,
    details,
    movie,
    rating,
    rate,
    rated,
    vote,
    rates,
    find,
    awards,
    all,
    castdetails,
    releasedetails,
    titledetails,
    tomatodetails,
    released,
    fullplot,
    plot,
    justice,
    runtime,
    data21
}
