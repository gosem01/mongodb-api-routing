const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
//   updateCourse,
//   deleteCourse,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleUser)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;