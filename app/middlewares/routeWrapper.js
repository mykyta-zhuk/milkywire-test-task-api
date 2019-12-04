// module.exports = route => (req, res, next) => route(req, res, next)
//   .then(data => res.json(Object.assign({}, data)))
//   .catch(next);

module.exports = route => async (req, res, next) => {
  try {
    const data = await route(req, res, next);
    return res.json(Object.assign({}, data));
  } catch (error) {
    return next(error);
  }
};
