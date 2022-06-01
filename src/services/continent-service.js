import { continentModel } from '../db';

class ContinentService {
    constructor(continentModel) {
      this.continentModel = continentModel;
    }
    // 객체 destructing
    async addContinent(continentInfo) {
    //   const { continentName } = continentInfo;
    //   const continent_name = { continentName };
    //   console.log(continentInfo.continentName);
    //   console.log(typeof continentInfo);

      // 중복확인 추가하기

      // db에 저장
      const createdNewContinent = await this.continentModel.create(continentInfo.continentName);
      return createdNewContinent;

    }
}

const continentService = new ContinentService(continentModel);

export { continentService };