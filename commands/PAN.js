import ora from "ora";
import chalk from "chalk";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
import { generateRandom } from "../Utils/genRandom.js";
dotenv.config()



const client = new MongoClient(process.env.MONGO_URI);

export async function CreatePAN() {
  try {
    const database = client.db('agdb-dev');
    const movies = database.collection('SHEntities');
    const GSTNO = generateRandom("PAN")
    const query = { "documents.pkey":GSTNO  };
    const movie = await movies.findOne(query);
    let spinner = ora('Creating the PAN...').start()
    if (movie) {
        CreatePAN()
    }
    else{
        spinner.stop()
        console.log(chalk.black.bgWhite('Created the PAN : ')+" "+ chalk.bgBlueBright.bold(GSTNO));
        client.close();
    }
  } catch(e) {
    console.log(e);
  }
}


