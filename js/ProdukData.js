class ProdukData {
  constructor() {
    this._mData;
    this._total;
  }

  set mData(data) {
    this._mData = data;
  }

  get mData() {
    return this._mData;
  }

  createRow(_name, _price, _category) {
    let tmp = { name: _name, price: _price, category:_category };
    return tmp;
  }

  saveData(inputName, inputPrice, inputCategory) {
    
    let row = this.createRow(inputName, inputPrice, inputCategory);
    this.mData.push(row);
    
    localStorage.setItem("product", JSON.stringify(this.mData));
    alert("Data Berhasil disimpan");
  }

  getDataByIndex(index) {
    let tmp = this.mData[index];
    return tmp;
  }

  editDataByIndex(_name, _price, _category, _index) {
    this.mData[_index].name = _name;
    this.mData[_index].price = _price;
    this.mData[_index].category = _category;
    
    localStorage.setItem("product", this.mData);
  }

  deleteDataByIndex(_index) {
    this.mData.splice(_index, 1);
    localStorage.setItem("product", this.mData);
  }

  init() {
    this.mData = [];
    localStorage.setItem("product", JSON.stringify(this.mData));
    if (localStorage.getItem("product") != null) {
      this.mData = JSON.parse(localStorage.getItem("product"));
    }
  }
}
