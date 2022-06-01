import { model } from 'mongoose';
import { ContinentSchema } from '../schemas/continent-schema';

const Continent = model('continents', ContinentSchema);

export class ContinentModel {

  async findById(continent_id) {
    const continent = await Continent.findOne({ _id: continent_id });
    return continent;
  }

  async create(continentInfo) {
    const createdNewContinent = await Continent.create({continent_name : continentInfo});
    return createdNewContinent;
  }

  async findAll() {
    const continents = await Continent.find({});
    return continents;
  }

//   async update({ userId, update }) {
//     const filter = { _id: userId };
//     const option = { returnOriginal: false };

//     const updatedUser = await User.findOneAndUpdate(filter, update, option);
//     return updatedUser;
//   }

}

const continentModel = new ContinentModel();

export { continentModel };
