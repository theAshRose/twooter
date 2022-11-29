const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


// /api/users/:userId/reactions
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
