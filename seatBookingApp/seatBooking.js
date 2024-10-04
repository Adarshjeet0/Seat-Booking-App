const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

moviesList.forEach((movie) => {
  // console.log("We entered")
  let movieOption = document.createElement("option");
  movieOption.textContent = movie.movieName;
  movieOption.value = movie.price; // Set the value to the price
  movieOption.date = movie.date;
  document.getElementById("selectMovie").appendChild(movieOption);
});

document.querySelector("#selectMovie").addEventListener("change", function () {
  let selectedPrice = this.options[this.selectedIndex].value;
  document.getElementById("moviePrice").textContent = "$" + selectedPrice;
  let movieName = document.getElementById("movieName");
  movieName.textContent = this.options[this.selectedIndex].textContent;
  let date = document.getElementsByClassName("date")[0];
});

// let buttons = document.querySelector("#seatCont");
// console.log(buttons);

const seats = document.querySelectorAll("div.seat:not(li div.seat)");
// const seats = document.querySelectorAll('.seat');
console.log(seats);

// Add click event listener to each seat
seats.forEach((seat) => {
  seat.addEventListener("click", (event) => {
    let noSelected = document.querySelector("#selectedSeatsHolder").children[0];
    console.log(noSelected);
    if (noSelected.classList.contains("noSelected")) {
      noSelected.remove();
      console.log("removed");
    }
    if (!seat.classList.contains("occupied")) {
      // console.log(document.getElementById('selectedSeatsHolder').ELEMENT_NODE);
      seat.classList.toggle("selected");
      let index = [...seats].indexOf(seat);
      if (seat.classList.contains("selected")) {
        console.log(`you selected seat number ${index + 1}`);
        let selectedSeatsHolder = document.querySelector(
          "#selectedSeatsHolder"
        );
        let spanElement = document.createElement("span");
        let temp = index + 1;
        spanElement.id = "span" + temp;

        spanElement.textContent = `${index + 1}`;
        selectedSeatsHolder.append(spanElement);
        let numberOfSeat = document.getElementById("numberOfSeat");
        let seatsSelected = numberOfSeat.textContent;
        seatsSelected = parseInt(seatsSelected);
        seatsSelected++;
        numberOfSeat.textContent = seatsSelected;

        let totalPrice = document
          .getElementById("totalPrice")
          .textContent.substring(1);
        let price = document
          .getElementById("moviePrice")
          .textContent.substring(1);
        // console.log(price);
        // console.log(totalPrice);
        let priceofTotalSeats = seatsSelected * parseInt(price);
        document.getElementById("totalPrice").textContent =
          "$" + priceofTotalSeats;

        // let totalPrice = document.getElementById("totalPrice").textContent.substring(1);
        // let price = document.getElementById("moviePrice").textContent.substring(1);
        // // console.log(price);
        // // console.log(totalPrice);
        // let priceofTotalSeats = parseInt(totalPrice) + parseInt(price);
        // document.getElementById("totalPrice").textContent ="$"+priceofTotalSeats;
      } else {
        // let index = [...seats].indexOf(seat);
        let ind = index + 1;
        document.querySelector("#" + "span" + ind).remove();
        console.log("removed");
        console.log(`you selected seat number ${index + 1}`);
        let selectedSeatsHolder = document.querySelector(
          "#selectedSeatsHolder"
        );
        console.log(selectedSeatsHolder);
        // let spanElement = document.createElement("span");
        // spanElement.textContent = `${index+1}`;
        let numberOfSeat = document.getElementById("numberOfSeat");
        let seatsSelected = numberOfSeat.textContent;
        seatsSelected = parseInt(seatsSelected);
        seatsSelected--;
        numberOfSeat.textContent = seatsSelected;

        let totalPrice = document
          .getElementById("totalPrice")
          .textContent.substring(1);
        let price = document
          .getElementById("moviePrice")
          .textContent.substring(1);
        console.log(price);
        console.log(totalPrice);
        let priceofTotalSeats = parseInt(totalPrice) - parseInt(price);
        document.getElementById("totalPrice").textContent =
          "$" + priceofTotalSeats;
      }
    }
  });
});

//
let proceedBtn = document.getElementById("proceedBtn");
proceedBtn.addEventListener("click", () => {
  let selectedSeat = document.querySelectorAll(
    "div.selected:not(li div.selected)"
  );
  selectedSeat.forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("occupied");
  });

  document.getElementById(
    "selectedSeatsHolder"
  ).innerHTML = `<span class="noSelected">No Available seats</span>`;
  document.getElementById("numberOfSeat").textContent = 0;
  document.getElementById("totalPrice").textContent = "$ 0";
});

let cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("click", () => {
  let selectedSeat = document.querySelectorAll(
    "div.selected:not(li div.selected)"
  );
  selectedSeat.forEach((seat) => {
    seat.classList.remove("selected");
  });

  document.getElementById(
    "selectedSeatsHolder"
  ).innerHTML = `<span class="noSelected">No Available seats</span>`;
  document.getElementById("numberOfSeat").textContent = 0;
  document.getElementById("totalPrice").textContent = "$ 0";
});
