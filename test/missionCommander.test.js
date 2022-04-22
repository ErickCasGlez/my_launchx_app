const MissionCommander = require('./../app/missionCommander');
describe("Unit test fo mission commander class", () => {
    test('Create a mission commander object', () => {
      const myMissionCommander = new MissionCommander("Erick")
      expect(myMissionCommander.name).toBe("Yo");
    });
  })
  