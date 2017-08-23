var db = require('odbc')()
  , cn = "DRIVER={FreeTDS};DSN=;UID=;PWD=;Database="
  ;

db.open(cn, function (err) {
  if (err) return console.log(err);

  db.query('SELECT * from dbo.USER_NAME', function (err, data) {
    if (err) console.log(err);

    console.log(data);

    db.close(function () {
      console.log('done');
    });
  });
});
