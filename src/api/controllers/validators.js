const validateNumber = (req, res, next) => {
  const { count } = req.body;
  const errors = [];
  if (!count) errors.push('Count should be provided');
  if (count && typeof count !== 'number') {
    errors.push(`Count should be a number not ${typeof count}`);
  }
  if (typeof count === 'number' && count > 10000) errors.push(`please provide count less than 10000. ${count} is not allowed`);
  return errors.length ? res.status(422).json({
    count: errors,
  }) : next();
};

export default { validateNumber };
