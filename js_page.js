const oracledb = require('oracledb');

async function getIngredientsByRecipe(recipeId) {
    let connection;
  
    try {
      connection = await oracledb.getConnection({
        user: 'sys',
        password: 'oracle',
        connectString: 'localhost/XE'
      });