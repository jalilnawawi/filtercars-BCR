class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card mx-auto" style="width: 300px;">
    <img src="${this.image}" class="card-img-top" alt="${this.manufacture}" style=" height: 160px; object-fit: cover;">
    <div class="card-body" style="height:350px;">
      <h4 class="card-title">${this.manufacture} ${this.model}</h4>
      <h5 class="card-text">Rp. ${this.rentPerDay}/hari</h5>
      <p class="card-text">${this.description}</p>
          <p class="bi bi-people"> Kapasitas : ${this.capacity} orang</p>
          <p class="bi bi-gear"> Transmisi : ${this.transmission}</p>
          <p class="bi bi-calendar"> Tahun : ${this.year} </p>
          <p class="bi bi-calendar2-check"> Tersedia : ${new Date(this.availableAt).toLocaleString()}</p>
    </div>
    <div class="card-footer text-center bg-transparent">
    <button class="btn btn-success">Pilih Mobil</button>
  </div>
    `;
  }
}
