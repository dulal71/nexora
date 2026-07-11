import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);
const db = client.db('Nexora_shopping_platform');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  user:{
    additionalFields:{
      phone:{ type: "string", required: true } ,
      role: {type: "string", required: false }
    }
  },
  plugins:[
admin({defaultRole:'user'})
  ],

   emailAndPassword: { 
    enabled: true, 
  },
   
});