const { mysqldb } = require("./../connections");

module.exports = {
  getMovies: (req, res) => {
    let sql = `select * from movies`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  editMovies: (req, res) => {
    let { id, nama, tahun, description } = req.body;
    let data = {
      id,
      nama,
      tahun,
      description
    };
    let sql = `update movies set ? where id='${id}' `;

    mysqldb.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  addMovies: (req, res) => {
    let { nama, tahun, description } = req.body;
    let data = {
      nama,
      tahun,
      description
    };
    let sql = `insert into movies set ?`;

    mysqldb.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  deleteMovies: (req, res) => {
    const id = req.params.id;
    let sql = `delete from movies where id = ?`;

    mysqldb.query(sql, [id], (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
