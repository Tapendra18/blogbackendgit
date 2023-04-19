let likes = {};

exports.like = async function (req, res) {
  try {
    const id = req.param._id;
    if (!likes[id]) {
      likes[id] = 0;
    }
    likes[id] += 1;
    return res.status(200).send({ likes: likes[id] });
  } catch (err) {
    return res.status(500).send({ err: "Not working" });
  }
};

exports.likeGet = async function (req, res) {
  try {
    const like = likes.find();
    return res.status(200).send({
      success: true,
      data: like,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

exports.unlike = async function (req, res) {
  try {
    const id = req.param._id;
    if (!likes[id]) {
      likes[id] = 0;
    }
    likes[id] -= 1;
    return res.status(200).send({ likes: likes[id] });
  } catch (err) {
    return res.status(500).send({ err: "not working" });
  }
};

exports.unlikeGet = async function (req, res) {
  try {
    const like = likes.find();
    return res.status(200).send({
      success: true,
      data: like,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};
