package com.example.yyc_car_rental_app;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;

public class user_profile extends AppCompatActivity {

    TextView name,email,phonenumber,address;
    FirebaseAuth fAuth;
    FirebaseFirestore store;
    String UserId;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_profile);

        name= findViewById(R.id.name);
        email= findViewById(R.id.email);
        phonenumber= findViewById(R.id.phone);
        address= findViewById(R.id.home_address);
        fAuth = FirebaseAuth.getInstance();
        store = FirebaseFirestore.getInstance();

        UserId = fAuth.getCurrentUser().getUid();

        DocumentReference reference = store.collection("users").document(UserId);

        reference.addSnapshotListener(this, new EventListener<DocumentSnapshot>() {
            @Override
            public void onEvent(@Nullable DocumentSnapshot documentSnapshot, @Nullable FirebaseFirestoreException e) {
                name.setText(documentSnapshot.getString("fname"));
                email.setText(documentSnapshot.getString("email"));
                phonenumber.setText(documentSnapshot.getString("phonenumber"));
                address.setText(documentSnapshot.getString("address"));

            }
        });



    }
}
