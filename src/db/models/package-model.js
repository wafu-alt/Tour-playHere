import { model } from 'mongoose';
import { PackageSchema } from '../schemas/package-schema';

const Package = model('packages', PackageSchema);

export class PackageModel {
    // async findByPackageId(packageID) {
    //   const package = await Package.findOne({ _id: packageID });
    //   return package;
    // }

    async findAll() {
      const packages = await Package.find({});
      return packages;
    }

    // async update({ packageId, update}) {
    //   const filter = { _id: packageId };
    //   const option = { returnOriginal: false };

    //   const updatedPackage = await Package.findOneAndUpdate(filter, update, option);
    //   return updatedPackage;
    // }

}

const packageModel = new Package();

export { packageModel };

