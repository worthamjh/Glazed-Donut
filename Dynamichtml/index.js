const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get ('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit})
})
app.get ('/rand', (req,res) => {
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random.ejs', {rand: num})
})
app.get ('/unit1Assignments', (req,res) => {
    const assignments=[
    {
        title:"Exploartion 1-Systems and System Models",
        link:"https://kami.app/AwT-kRs-jVR-sK3",
        image:"https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ex1-Systems%20and%20System%20Models%20Image.PNG"
    },
    {
        title:"Lab-Life Under a Microscope Student Handout",
        link:"https://kami.app/VvC-kzj-kzv-Ndd",
        image:"https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.L1-Life%20Under%20a%20Microscope%20Image.PNG"
    },
    {
        title:"Exploration 2-The Earth System",
        link:"https://kami.app/vAN-bvD-MJj-1r7",
        image:"https://raw.githubusercontent.com/worthamjh/Biology/refs/heads/main/Unit%201-Living%20Systems/1.1-Life%20in%20the%20Earth%20System/1.1.Ex2-The%20Earth%20System%20Image.PNG"
    }
]
    res.render('unit1Assignments', {assignments})
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})