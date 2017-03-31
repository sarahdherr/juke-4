const express = require('express');
const getLyrics = require('lyric-get').get;
const router = new express.Router();
module.exports = router;

router.get('/:artist/:song', (req, res, next) => {
   getLyrics(req.params.artist, req.params.song, (err, r) => {
    //    console.log("made it!", r);
    //    console.log("~~~~~~", err);

       if (err) return next(err);
       res.send({ lyric: r });
   });
});