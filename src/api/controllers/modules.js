import models from '../database/models';

class Controllers {
  // eslint-disable-next-line consistent-return
  static async generateRandomNumber(req, res) {
    const numbers = [];
    const fromDatabase = await models.Number.findAll();
    const database = fromDatabase.map(each => each.mobile);
    const lastGeneration = fromDatabase.length ? fromDatabase.map(each => each.recently_generated)
      .reduce((a, b) => Math.max(a, b)) : 0;
    const recentlyGenerated = lastGeneration + 1;
    const min = 100000000;
    const max = 999999999;
    const difference = max - min;
    const { count } = req.body;
    /* istanbul ignore next */
    if (database.length + (10 * count) >= difference) {
      /* istanbul ignore next */
      return res.status(422).json({
        errors: {
          count: ['You are running short of available numbers please reduce the count'],
        },
      });
    }
    let random;
    const toCreate = [];
    try {
      while (numbers.length < count) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        const unique = !database.includes(random) && !numbers.includes(random);
        if (unique) {
          numbers.push(random);
          toCreate.push({
            mobile: random,
            createdAt: new Date(),
            updatedAt: new Date(),
            recently_generated: recentlyGenerated,
          });
        }
      }
      await models.Number.bulkCreate(toCreate);
      res.status(200).json({ numbers: toCreate });
    } catch (e) {
      /* istanbul ignore next */
      console.log(e.message);
    }
  }

  static async getAllGeneratedNumbers(req, res) {
    const count = await models.Number.count();
    const { page } = req.query;
    const orderBy = req.query.orderBy || 'id';
    const order = req.query.order || 'DESC';
    const limit = 10;
    const pageCount = Math.ceil(count / limit);
    const currentPage = page < 1 || !page || pageCount === 0 ? 1 : Math.min(page, pageCount);
    const offset = limit * (currentPage - 1);
    const allEntries = await models.Number.findAll(
      {
        offset, limit, order: [[orderBy, order]],
      },
    );
    res.status(200)
      .json({ numbers: allEntries, pagination: { pageCount, currentPage, totalCount: count } });
  }

  static async getRecentlyGenerated(req, res) {
    try {
      const fromDatabase = await models.Number.findAll();
      const lastGeneration = fromDatabase.length ? fromDatabase.map(each => each.recently_generated)
        .reduce((a, b) => Math.max(a, b)) : 0;
      const recentlyGenerated = await models.Number.findAll({
        where: {
          recently_generated: lastGeneration,
        },
      });
      res.status(200).json({ recentlyGenerated });
    } catch (e) {
      /* istanbul ignore next */
      console.log(e.message);
    }
  }
}
export default Controllers;
