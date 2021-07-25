import { makeAutoObservable } from "mobx";

class geoStore {
  latitude = null;
  longitude = null;
  timestamp = null;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentLocation = () => {
    console.log("GEt current location");
    var test;
    const nav = navigator.geolocation.getCurrentPosition((data) => {
      console.log("Data : ", data);

      test = data;

      return data;
    });

    console.log("NAv : ", test);

    // this.timestamp = timestamp;
  };
}

export default new geoStore();
