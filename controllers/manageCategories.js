const { mysqldb } = require("../connections");

module.exports = {
  getCategory: (req, res) => {
    let sql = `select * from categories`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  addCategory: (req, res) => {
    let { nama } = req.body;
    let data = {
      nama
    };
    let sql = `insert into categories set ?`;

    mysqldb.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  editCategory: (req, res) => {
    let { id, nama } = req.body;
    let data = {
      id,
      nama
    };
    let sql = `update categories set ? where id='${id}'`;

    mysqldb.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteCategory: (req, res) => {
    const id = req.params.id;
    let sql = `delete from categories where id = ?`;

    mysqldb.query(sql, [id], (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
