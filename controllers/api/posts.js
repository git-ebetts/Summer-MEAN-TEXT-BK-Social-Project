var router = require('express').Router()
var websockets = require('../../websockets')
var Post = require('../../models/post')


router.get('/posts',
	function (req, res, next) {
		Post.find()
		.sort('-date')
		.exec(function (err, posts) {
			if (err){returnStatus(this.status)}
				res.json(posts)
			console.log('error status'+ this.status)
		})
		// console.log('express router posts received! Should display')
	})


router.post('/posts', function (req, res, next) {
  var post = new Post({body: req.body.body})
  post.username = req.auth.username
  post.save(function (err, post) {
    if (err) { return next(err) }
    	websockets.broadcast('new_post', post)
    res.status(201).json(post)
	})
})

module.exports = router
