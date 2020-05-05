package com.example.yyc_car_rental_app;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.TimePicker;

import com.bumptech.glide.Glide;

import java.util.Calendar;

public class Customer_Detail extends AppCompatActivity {

     private static final String TAG = "Customer Details";
     private TextView displaydate;
     private  TextView displayenddate;
      private TextView endtime;
     private TextView starttime;
     Context context = this;

     private DatePickerDialog.OnDateSetListener mDateSetListener,dateSetListener;
    TextView car_name,car_price;
    ImageView image;
    Button confirm;
    TextView type;
    TextView model;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_customer__detail);

        car_name = findViewById(R.id.car_select);
        car_price = findViewById(R.id.Price);
        image = findViewById(R.id.carimage);
        type= findViewById(R.id.car_type);
        model= findViewById(R.id.car_model);

        Intent intent = getIntent();
        String carname = intent.getStringExtra("carname");
        String carprice = intent.getStringExtra("carprice");
        String carimage = intent.getStringExtra("image");
        String cartype = intent.getStringExtra("type");
        String carmodel = intent.getStringExtra("model");

        car_name.setText(carname);
        car_price.setText(carprice);
        Glide.with(this)
                .asBitmap()
                .load(carimage)
                .into(image);
        type.setText(cartype);
        model.setText(carmodel);


       starttime = findViewById(R.id.start_time);
       Calendar calendar = Calendar.getInstance();
       final int hours = calendar.get(Calendar.HOUR_OF_DAY);
       final int minute = calendar.get (calendar.MINUTE);
       starttime.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View v) {
               TimePickerDialog timePickerDialog = new TimePickerDialog(context, new TimePickerDialog.OnTimeSetListener() {
                   @Override
                   public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
                       starttime.setText(hourOfDay+":"+minute);
                   }
               },hours,minute,android.text.format.DateFormat.is24HourFormat(context));
               timePickerDialog.show();
           }
       });



         displaydate = findViewById(R.id.date);
         displaydate.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View v) {

                 Calendar cal = Calendar.getInstance();
                 int year = cal.get(Calendar.YEAR);
                 int month = cal.get(Calendar.MONTH);
                 int day = cal.get(Calendar.DAY_OF_MONTH);

                 DatePickerDialog dialog = new DatePickerDialog(Customer_Detail.this,android.R.style.Theme_Holo_Dialog_MinWidth,mDateSetListener,year,month,day);
                   dialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                   dialog.show();

             }
         });
         mDateSetListener = new DatePickerDialog.OnDateSetListener() {
             @Override
             public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {

                 month = month+1;
                 Log.d(TAG, "onDateSet: mm/dd/yyyy"+month+"/"+dayOfMonth+"/"+year);

                 String date = month+"/"+dayOfMonth+"/"+year;
                 displaydate.setText(date);


             }
         };


         displayenddate = findViewById(R.id.end_date);
         displayenddate.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View v) {

                 Calendar cal = Calendar.getInstance();
                 int year = cal.get(Calendar.YEAR);
                 int month = cal.get(Calendar.MONTH);
                 int day = cal.get(Calendar.DAY_OF_MONTH);

                 DatePickerDialog d = new DatePickerDialog(Customer_Detail.this,android.R.style.Theme_Holo_Dialog_MinWidth,dateSetListener,year,month,day);
                 d.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                 d.show();

             }
         });

        dateSetListener = new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {

                month = month+1;
                Log.d(TAG, "onDateSet: mm/dd/yyyy"+month+"/"+dayOfMonth+"/"+year);

                String date = month+"/"+dayOfMonth+"/"+year;
                displayenddate.setText(date);

            }
        };

        endtime = findViewById(R.id.endtime);
        Calendar c = Calendar.getInstance();
        final int hour = c.get(Calendar.HOUR_OF_DAY);
        final int min = c.get (Calendar.MINUTE);
        endtime.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TimePickerDialog TimePickerDialog = new TimePickerDialog(context, new TimePickerDialog.OnTimeSetListener() {
                    @Override
                    public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
                        endtime.setText(hourOfDay+":"+minute);
                    }
                },hours,minute,android.text.format.DateFormat.is24HourFormat(context));
                TimePickerDialog.show();
            }
        });



        /*------*/
          confirm = findViewById(R.id.btn_nxt);

          confirm.setOnClickListener(new View.OnClickListener() {
              @Override
              public void onClick(View v) {

                  Intent payment  = new Intent(Customer_Detail.this,Paymentmethod.class);
                  startActivity(payment);
              }
          });



    }
}
