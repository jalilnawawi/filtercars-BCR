class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.onSubmitFormFilter = document.getElementById("form_filter");
    this.onSelectedDriverType = document.getElementById("tipe_driver");
    this.onSelectedBookingDate = document.getElementById("tanggal_booking");
    this.onSelectedBookingTime = document.getElementById("waktu_booking");
    this.onSelectedTotalPassenger = document.getElementById("total_penumpang");

  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.onSubmitFormFilter.addEventListener("submit", this.onFilteredCar, true);
  }

  run = () => {
    console.log("Before :", Car.list.length)
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  // onFilteredCar = async(event) =>{
  //   this.clear();
  //   const filteredCar = await Binar.listCars(data => {
  //     return data.capacity >= this.onSelectedTotalPassenger.value
  //   });
  //   Car.init(filteredCar);
  //   this.run();

  //   event.preventDefault();
  // }
  onFilteredCar = async(event) =>{
    this.clear();
      let tgl = this.onSelectedBookingDate.value;
      let jam =  this.onSelectedBookingTime.value;
      let waktu = (tgl + "T" + jam);
      let inputWaktu = Date.parse(waktu);
      console.log(inputWaktu);
      
      const filteredCar = await Binar.listCars(data => {
        let avaAt = Date.parse(data.availableAt);
        return data.capacity >= this.onSelectedTotalPassenger.value && avaAt >= inputWaktu;
    });
    Car.init(filteredCar);
      this.run();

      event.preventDefault();
      console.log(filteredCar);
    }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
