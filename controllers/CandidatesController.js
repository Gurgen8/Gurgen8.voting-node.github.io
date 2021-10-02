import { People, Candidates } from "../models";

class CandidatesController {

  static list = async (req, res, next) => {
    try {
      const candidates = await Candidates.findAll({
        include: [{
          model: People,
          as: 'person',
        }],
        logging: true,
        subQuery: false,
      });
      const candidates2 = await People.findAll({
        include: [{
          model: Candidates,
          required: true,
          as: 'candidate',
        }],
      });
      res.json({
        candidates2,
        status: 'ok',
        candidates,
      })
    } catch (e) {
      next(e)
    }
  }
}

export default CandidatesController;
