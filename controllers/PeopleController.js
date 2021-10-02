import { People, Candidates } from "../models";
import { literal } from "sequelize";
import moment from "moment";
import 'moment-timezone';

class CandidatesController {

  static vote = async (req, res, next) => {
    try {
      const { personId, candidateId, voted } = req.body;
      await People.update({
        voted: moment.tz(voted, 'America/Chicago'),
      }, {
        where: { id: personId }
      });

      // update candidates set votes = votes + 1 where id = 9
      await Candidates.update({
        votes: literal('votes + 1')
      }, {
        where: { id: candidateId }
      })


      res.json({
        status: 'ok',
      })
    } catch (e) {
      next(e)
    }
  }
}

export default CandidatesController;
