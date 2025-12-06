import express from 'express'


const app = express();


app.get('/', (req,res)=>res.json({message:"Health Check working", success:true}));

app.use((err, req, res, next) => {
  console.error("ERROR:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
});

app.listen(process.env.PORT , () => console.log("Server Live"));
