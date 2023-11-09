console.log('Selamat Datang!');

setTimeout(() => {
    console.log('Terima Kasih Sudah Mampir,Silahkan Datang Kembali!');
}, 3000)

console.log('Ada Yang Bisa kami Bantu');

function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
      callback(users);
    }, 3000);
  }