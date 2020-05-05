package com.example.yyc_car_rental_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;

public class MainActivity extends AppCompatActivity {

    ImageView bgpp;
    Animation bganim;
      LinearLayout textsplash,menu;
      Animation frombutton;
      Button login;
      FirebaseFirestore fAuth;

    TextView welcom;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         bgpp = (ImageView) findViewById(R.id.bgapp);
         login = findViewById(R.id.movetologin);
          frombutton = AnimationUtils.loadAnimation(this,R.anim.button);
         bganim = AnimationUtils.loadAnimation(this,R.anim.bganim);
      textsplash = findViewById(R.id.textsplash);
        menu = findViewById(R.id.menus);
        bgpp.startAnimation(bganim);
        bgpp.animate().translationY(-2000).setDuration(800).setStartDelay(300);
         textsplash.animate().translationY(140).alpha(0).setDuration(800).setStartDelay(300);

                   menu.startAnimation(frombutton);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent movetologin = new Intent(MainActivity.this,LoginScreen.class);
                startActivity(movetologin);

            }
        });



    }


}
