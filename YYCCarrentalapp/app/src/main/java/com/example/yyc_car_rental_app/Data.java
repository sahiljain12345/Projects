package com.example.yyc_car_rental_app;


import android.os.Parcel;
import android.os.Parcelable;

public class Data  {


    private String carname ;
    private String  price;
    private String carimage;
    private String model;
    private String type;

    private Data(){}
     private Data(String carname, String price, String carimage,String model,String type){

    this.carname = carname;
    this.price = price;
    this.carimage = carimage;
    this.model = model;
    this.type = type;


     }

     public String getCarname() {
        return carname;
    }

    public String getPrice() {
        return price;
    }

    public void setCarname(String carname) {
        this.carname = carname;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCarimage() {
        return carimage;
    }

    public void setCarimage(String carimage) {
        this.carimage = carimage;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


}
