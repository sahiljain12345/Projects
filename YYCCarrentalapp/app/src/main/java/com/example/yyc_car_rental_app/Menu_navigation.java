package com.example.yyc_car_rental_app;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.navigation.NavigationView;

public class Menu_navigation extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    DrawerLayout drawerLayout;
    ActionBarDrawerToggle actionBarDrawerToggle;
    Toolbar toolbar;
    NavigationView navigationView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu_navigation);
          toolbar = findViewById(R.id.tool);
          setSupportActionBar(toolbar);

         drawerLayout = findViewById(R.id.drawer);
         navigationView = findViewById(R.id.navigationview);
         actionBarDrawerToggle = new ActionBarDrawerToggle(this,drawerLayout,toolbar,R.string.open ,R.string.close);
         drawerLayout.addDrawerListener(actionBarDrawerToggle);
         actionBarDrawerToggle.setDrawerIndicatorEnabled(true);
         actionBarDrawerToggle.syncState();
        navigationView.bringToFront();


    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {

             switch (item.getItemId()){

                 case R.id.home:
                     break;
                 case R.id.profile:
                     Intent i = new Intent(Menu_navigation.this,user_profile.class);
                     startActivity(i);
                     break;

             }



        return true;
    }
}
