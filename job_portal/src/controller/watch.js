import watchModel from "../model/watch.js";

const addToWatchList = (req, res) => {
  const userId = req.userId;
  const productId = req.query.productId;

  const CouserAdded = watchModel.add(userId, productId);
  res.render("addWatchList", { cartAdded: CouserAdded });
};

export default addToWatchList;
