const { mysqldb } = require("../connections");

module.exports = {
  getmovcat: (req, res) => {
    let sql = `SELECT m.nama AS NamaMovie, c.nama AS NamaCategory FROM movcat mc
        JOIN movies m ON mc.idmovie = m.id
        JOIN categories c ON mc.idcategory = c.id`;

    // let sql = `select * from movcat`;

    mysqldb.query(sql, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(results);
    });
  },

  addMovCat: (req, res) => {
    let movcat = req.body;
    let sql = `INSERT INTO movcat SET ?`;

    mysqldb.query(sql, movcat, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(results);
    });
  },

  deleteMovCat: (req, res) => {
    const id = req.params.id;
    let sql = `delete from movcat where id = ?`;

    mysqldb.query(sql, [id], (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
