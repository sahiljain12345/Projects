package com.example.yyc_car_rental_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Paymentmethod extends AppCompatActivity {
    Button paymentcredit;
    Button paymentpaypal;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_paymentmethod);

      paymentcredit = findViewById(R.id.credit);
      paymentpaypal = findViewById(R.id.paypal);

      paymentcredit.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {

              Intent i = new Intent(Paymentmethod.this,CardDetailsActivity.class);
              startActivity(i);
          }
      });

        paymentpaypal.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent e = new Intent(Paymentmethod.this, CardDetailsActivity.class);
                startActivity(e);
            }
        });
    }
}
