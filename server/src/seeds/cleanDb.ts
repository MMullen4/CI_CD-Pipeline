// import models from '../models/index.js';
// import db from '../config/connection.js';

// export default async (modelName: "Question", collectionName: string) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
import models from "../models/index.js";
import db from "../config/connection.js";

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
    const listCollections = model?.db?.db?.listCollections;

    if (listCollections) {
      const modelExists = await listCollections
        .call(model.db.db, {
          name: collectionName,
        })
        .toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    }
  } catch (err) {
    throw err;
  }
};
