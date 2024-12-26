function tasKagitMakas(kullanici) {
  const rastgele = Math.floor(Math.random() * 3);
  let bilgisayar;

  if (rastgele === 2) {
    bilgisayar = 'makas';
  } else if (rastgele === 1) {
    bilgisayar = 'kağıt';
  } else {
    bilgisayar = 'taş';
  }

  if (
    (bilgisayar === 'makas' && kullanici === 'taş') ||
    (bilgisayar === 'kağıt' && kullanici === 'makas') ||
    (bilgisayar === 'taş' && kullanici === 'kağıt')
  ) {
    return (
      'Senin seçimin: ' +
      kullanici +
      '. Bilgisayarın seçimi: ' +
      bilgisayar +
      '. Kazandın!'
    );
  } else if (bilgisayar === kullanici) {
    return (
      'Senin seçimin: ' +
      kullanici +
      '. Bilgisayarın seçimi: ' +
      bilgisayar +
      '. Beraberlik!'
    );
  } else {
    return (
      'Senin seçimin: ' +
      kullanici +
      '. Bilgisayarın seçimi: ' +
      bilgisayar +
      '. Kaybettin!'
    );
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
