import { Candidates, People } from "../models";

async function main() {
  await People.sync({ alter: true });
  await Candidates.sync({ alter: true });
  process.exit(0)
}

main().catch(e => console.error(e))
