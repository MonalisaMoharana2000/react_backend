const Post = require("../models/postModel");

const createPost = async (req, res) => {
  const {
    stopName,
    stopAddress,
    lattitude,
    longitude,
    pickupPrice,
    dropPrice,
  } = req.body;

  try {
    const postBody = await new Post({
      stopName,
      stopAddress,
      lattitude,
      longitude,
      pickupPrice,
      dropPrice,
    }).save();

    res.status(200).send({ success: true, msg: "Post Data", data: postBody });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ _id: 1 });
    res.status(200).send({ success: true, msg: "Post Data", data: posts });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

const deletePosts = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const { n, ok } = await Post.deleteOne({ _id });

    n === 1 && ok === 1
      ? res
          .status(200)
          .send({ success: true, msg: "Post deleted successfully" })
      : res.status(400).send({ success: false, msg: "Post delete fail" });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

const updatePosts = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const updateData = req.body;

    const updatedPost = await Post.updateOne({ _id }, updateData, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).send({ success: false, msg: "Post not found" });
    }
    res.status(200).send({
      success: true,
      msg: "Post updated successfully",
      data: updatedPost,
    });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  deletePosts,
  updatePosts,
};
