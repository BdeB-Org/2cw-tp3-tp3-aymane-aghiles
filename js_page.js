const oracledb = require('oracledb');

async function getIngredientsByRecipe(recipeId) {
    let connection;
  
    try {
      connection = await oracledb.getConnection({
        user: 'sys',
        password: 'oracle',
        connectString: 'localhost/XE'
      });

      const result = await connection.execute(`
      SELECT i.nom_ingredient, ri.quantite, ri.udm
      FROM ingredient i
      JOIN recette_ingredient ri ON i.id_ingredient = ri.id_ingredient
      WHERE ri.id_recette = :recipeId
    `, [recipeId]);

    console.log(result.rows);

} catch (err) {
    console.error('Une erreur est survenue lors de la récupération des ingrédients :', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Une erreur est survenue lors de la fermeture de la connexion :', err);
      }
    }
  }
}
