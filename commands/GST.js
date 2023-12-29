import ora from "ora";
import chalk from "chalk";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
import { generateRandom } from "../Utils/genRandom.js";
dotenv.config()


const client = new MongoClient(process.env.MONGO_URI);

export async function CreateGST() {
  try {
    let spinner = ora('Creating the GST...').start()
    const database = client.db('agdb-dev');
    const movies = database.collection('SHEntities');
    const GSTNO = generateRandom("GST")
    const query = { "documents.pkey":GSTNO  };
    const movie = await movies.findOne(query);
    if (movie) {
        CreateGST()
    }
    else{
        spinner.stop()
        // console.log(chalk.black.bgWhite('Created the GST : ')+" "+ chalk.bgBlueBright.bold(GSTNO));
        console.log(chalk.bgBlueBright.bold(GSTNO));
        
        client.close();
    }
  } catch(e) {
    console.log(e);
  }
}


