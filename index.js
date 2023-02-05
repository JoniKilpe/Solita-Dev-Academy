const { MongoClient } = require('mongodb');
//SETTING UP mongodb. User and password to get database information.
const uri = "mongodb+srv://Solitatask:Kuukkeli12!@cluster0.jqrbltf.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = client.db("HelsinkiEspooBikeapp").collection("Helsinki City Bike APP");
  // perform actions on the collection object

  // pipeline takes into account the task's specified filters.
    const pipeline = [
      {
          '$match': {
              'Covered distance (m)': {
                  '$gt': 9
              }, 
              'Duration (sec)': {
                  '$gt': 9
              }
          }
      }
  ]

  //agg displays the filtered database results on cmd.
    const agg = await collection.aggregate(pipeline).toArray();

    console.log(agg)

  client.close();
});
