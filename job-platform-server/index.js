const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./models/Users");
const port = process.env.PORT || 3000;
require("dotenv").config();

// use middleware
app.use(express.json());
app.use(cors());

// user: easykelchimdikejohn
// password: 6SbMYkRtYsDV8LZt

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-platform.w0mhsqm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create database
    const db = client.db("job-platform");
    const jobCollection = db.collection("demoJobs");
    const userCollection = db.collection("users");

    // post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(500).send({
          message: "Cannot insert try again later.",
          status: false,
        });
      }
    });

    // get users
    app.get("/users", async (req, res) => {
        // Fetch all users from the database
        const users = await userCollection.find().toArray();
        res.send(users)
    });

    // SIgn uop

    app.post("/sign-up", async (req, res) => {
      try {
        // Extract user information from the request body
        const { name, email, password } = req.body;

        // Add any additional data you want to store about the user
        const createdAt = new Date();

        // Assuming you have a users collection in your MongoDB database
        const result = await userCollection.insertOne({
          name,
          email,
          password, // Note: In a real application, it's recommended to hash passwords before storing them
          createdAt,
        });

        // Check if the user was successfully inserted into the database
        if (result.insertedId) {
          return res.status(200).send({
            message: "User signed up successfully.",
            status: true,
          });
        } else {
          return res.status(500).send({
            message: "Failed to sign up user. Please try again later.",
            status: false,
          });
        }
      } catch (error) {
        console.error("Error signing up user:", error);
        return res.status(500).send({
          message: "An error occurred while signing up user.",
          status: false,
        });
      }
    });

    app.post("/login", async (req, res) => {
      try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Fetch user from the database based on the username
        const user = await userCollection.findOne({ email });

        // If user is not found, return an error
        if (!user) {
          return res.status(404).send({
            message: "User not found.",
            status: false,
          });
        }

        // Compare the provided password with the password stored in the database
        if (password === user.password) {
          return res.status(200).send({
            message: "User authenticated successfully.",
            status: true,
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
              // Add any other user data you want to send back
            },
          });
        } else {
          // If passwords don't match, return an error
          return res.status(401).send({
            message: "Invalid password.",
            status: false,
          });
        }
      } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).send({
          message: "An error occurred while logging in user.",
          status: false,
        });
      }
    });

    // app.post("/sign-up", (req, res) => {
    //   UserModel.create(req.body)
    //     .then((users) => res.json(users))
    //     .catch((err) => res.json(err));
    // });

    // get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollection.find({}).toArray();
      res.send(jobs);
    });

    // get a job by id
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobCollection.findOne({ _id: new ObjectId(id) });
      res.send(job);
    });

    // get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobCollection
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    // delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobCollection.deleteOne(filter);
      res.send(result);
    });

    // update a job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...jobData,
        },
      };
      const result = await jobCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Jobber!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
