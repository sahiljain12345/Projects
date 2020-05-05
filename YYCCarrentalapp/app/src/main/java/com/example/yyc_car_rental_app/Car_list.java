package com.example.yyc_car_rental_app;


import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.cardview.widget.CardView;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.TextureView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Adapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import com.firebase.ui.firestore.FirestoreRecyclerAdapter;
import com.firebase.ui.firestore.FirestoreRecyclerOptions;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.navigation.NavigationView;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.Query;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

public class Car_list extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {


    private static final String TAG = "carname" ;
    private  List<Data> datalist = new ArrayList<>();
    private RecyclerView  List;
    private  FirestoreRecyclerAdapter adapter;
    LinearLayout movietocheckout;
    FirebaseFirestore store;
    Button profile;
    DrawerLayout drawerLayout;
    ActionBarDrawerToggle actionBarDrawerToggle;
    Toolbar toolbar;
    NavigationView navigationView;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_car_list);
        toolbar = findViewById(R.id.tool);
        setSupportActionBar(toolbar);

        drawerLayout = findViewById(R.id.drawer);
        navigationView = findViewById(R.id.navigationview);
        actionBarDrawerToggle = new ActionBarDrawerToggle(this,drawerLayout,toolbar,R.string.open ,R.string.close);
        drawerLayout.addDrawerListener(actionBarDrawerToggle);
        actionBarDrawerToggle.setDrawerIndicatorEnabled(true);
        actionBarDrawerToggle.syncState();
        navigationView.bringToFront();






               List  = findViewById(R.id.carlist);
               store = FirebaseFirestore.getInstance();


               store.collection("Car").whereEqualTo("carnam",true).get().addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                   @Override
                   public void onComplete(@NonNull Task<QuerySnapshot> task) {
                       if (task.isSuccessful()) {
                           for (QueryDocumentSnapshot field : task.getResult()) {
                               Log.d(TAG, field.getId()  + " => " + field.getData());

                           }
                       } else {
                           Log.d(TAG, "Error getting documents: ", task.getException());
                       }
                   }
               });


             Query query =  store.collection("Car");

            FirestoreRecyclerOptions<Data> option = new FirestoreRecyclerOptions.Builder<Data>()
                .setQuery(query,Data.class)
                .build();
        /*---------------------------------------------------------------------------------------------------------------------------------------------*/
              adapter = new FirestoreRecyclerAdapter<Data, DataViewHolder>(option) {
            @NonNull
            @Override
            public DataViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

              View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_item_single,parent,false);
                return new DataViewHolder(view);
            }

            @Override
            protected void onBindViewHolder(@NonNull DataViewHolder dataViewHolder, int position, @NonNull final Data data) {

                //final Data data1 = datalist.get(position);


                dataViewHolder.list_name.setText(data.getCarname());
                dataViewHolder.list_price.setText( "Price "+ data.getPrice()+"hr");
                Picasso.get().load(data.getCarimage()).into(dataViewHolder.car_image);
                dataViewHolder.model.setText(data.getModel());
                dataViewHolder.type.setText(data.getType());



                dataViewHolder.itemView.setOnClickListener(new View.OnClickListener() {
                     @Override
                     public void onClick(View v) {

                      //   Toast.makeText(Car_list.this, "You Clicked: " + data.getCarimage(), Toast.LENGTH_SHORT).show();
                         Intent intent = new Intent(Car_list.this,Customer_Detail.class);
                         intent.putExtra("carname",data.getCarname());
                         intent.putExtra("carprice",data.getPrice());
                         intent.putExtra("image",data.getCarimage());
                         intent.putExtra("type",data.getType());
                         intent.putExtra("model",data.getModel());
                         v.getContext().startActivity(intent);


                     }
                 });


                }

              };



        List.setHasFixedSize(true);
        List.setLayoutManager(new LinearLayoutManager(this));
        List.setAdapter(adapter);
        navigationView.setNavigationItemSelectedListener(this);
    }
    /*---------------------------------------------------------------------------------------------------------*/


   /*----------------------------------------------------------------------------------------*/
    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {

        switch (item.getItemId()){

            case R.id.home:
                Intent h = new Intent(Car_list.this,Car_list.class);
                startActivity(h);
                break;
            case R.id.profile:
                Intent p = new Intent(Car_list.this,user_profile.class);
                startActivity(p);
                break;
            case R.id.logut:
                FirebaseAuth.getInstance().signOut();
                startActivity(new Intent(getApplicationContext(),LoginScreen.class));
                finish();
                break;
            case R.id.aboutus:
                Intent about = new Intent(Car_list.this,aboutus.class);
                startActivity(about);
                break;
            case R.id.help:
                Intent help = new Intent(Car_list.this,help.class);
                startActivity(help);
                break;


        }
        return true;
    }

    /*-------------------------------------------------------------------------------------------*/

    /*----------------------------------------------------------------------------------*/
    private class DataViewHolder extends RecyclerView.ViewHolder{

        private TextView list_name;
        private  TextView list_price;
         private ImageView car_image;
         private TextView model;
         private  TextView type;

        public DataViewHolder(@NonNull View itemView) {
            super(itemView);

            list_name = itemView.findViewById(R.id.list_name);
            car_image = itemView.findViewById(R.id.car_image);
            list_price = itemView.findViewById(R.id.list_price);
            model = itemView.findViewById(R.id.list_model);
            type = itemView.findViewById(R.id.list_type);

        }
    }
    /*----------------------------------*/

    /*------------------------------------------------------*/
    @Override
    protected void onStop() {
        super.onStop();
      adapter.stopListening();
    }

    @Override
    protected void onStart() {
        super.onStart();
        adapter.startListening();
    }
    /*----------------------------------------------*/
}
