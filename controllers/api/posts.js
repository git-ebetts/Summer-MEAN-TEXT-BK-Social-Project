var router =
require('express').Router()
var Post=
require('../../models/post')


router.get('/posts',
	function (req, res, next) {
		Post.find()
		.sort('-date')
		.exec(function(err, posts) {
			if (err){return next(err)}
				res.json(posts)
		})
	})


router.post('/posts', function(req,
	res, next) {
	var post = new Post ({
		username: req.body.username,
		body: req.body.body
	})

	console.log('post received!')
	console.log(req.body.username)
	console.log(req.body.body)

	post.save(function (err, post) {
		if (err) { 
			console.log(err)
			return next(err) }
			res.status(status).json(201, post)
		})
})

module.exports = router
