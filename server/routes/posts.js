var express = require('express');
var router = express.Router();

const { createPost, postLike, getPost, getCategoryPost, getPostBasedOnId } = require('../controller/postController')
const { catchErrors } = require('../handlers/errorHandler');


/* Create a Post */
router.route('/').post(catchErrors(createPost));

/* Create a like */
router.route('/like').post(catchErrors(postLike));

/* get all post */
router.route('/').get(catchErrors(getPost))

/* get post based on category */

router.route('/:categoryId').get(catchErrors(getCategoryPost))

router.route('/post-detail/:postId').get(catchErrors(getPostBasedOnId))

module.exports = router;
