const game = () => {
  let player1Score = 0;
  let player2Score = 0;
  alert(`Rules : 
    Angka Yang dimasukkan Harus 1-3.
    Tidak Boleh Memasukkan Angka yang Sama.
    Tidak Boleh Memasukkan Huruf.
    Best of 5`);
  for (let index = 0; index <= 5; index++) {
    let guessNumber = Math.floor(Math.random() * 3) + 1;
    let player1 = prompt("player1 masukkan Tebakan");

    if (isNaN(player1)) {
      while (isNaN(player1)) {
        player1 = prompt("Input Harus Angka");
      }
    }
    if (parseInt(player1) > 3) {
      while (parseInt(player1) > 3) {
        player1 = prompt("Angka Harus 1-3");
      }
    }

    let player2 = prompt("player2 masukkan Tebakan");
    if (parseInt(player1) === parseInt(player2)) {
      while (parseInt(player1) === parseInt(player2)) {
        player2 = prompt("Angka Sudah Dipilih");
      }
    }
    if (isNaN(player2)) {
      while (isNaN(player2)) {
        player2 = prompt("Input Harus Angka");
      }
    }
    if (parseInt(player2) > 3) {
      while (parseInt(player2) > 3) {
        player2 = prompt("Angka Harus 1-3");
      }
    }

    if (parseInt(player1) === guessNumber) {
      alert("Player 1 Win!");
      alert(`Score
      Player 1 = ${++player1Score} Player 2 = ${player2Score}`);
    } else if (parseInt(player2) === guessNumber) {
      alert("Player 2 Win!");
      alert(`Score 
      Player 1 = ${player1Score} Player 2 = ${++player2Score}`);
    } else {
      alert("Tidak Ada Yang Benar, Hasil Seri");
      alert(`Score
      Player 1 = ${player1Score} Player 2 = ${player2Score}`);
    }
  }
};

game();
