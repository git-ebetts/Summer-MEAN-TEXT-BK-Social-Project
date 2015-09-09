var router = require('express').Router()
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
	var post = new Post ({
		username: req.body.username,
		body: req.body.body
	})
// console.log("just posted from router")

	console.log(req.body.username)
	console.log(req.body.body)

	post.save(function (err, post) {
		// console.log('express router post saved!')
		if (err) { return next(err) }
			res.status(201).json(post)
	})
})

module.exports = router
