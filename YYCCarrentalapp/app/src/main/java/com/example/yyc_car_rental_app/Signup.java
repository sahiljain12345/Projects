package com.example.yyc_car_rental_app;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.auth.User;

import java.util.HashMap;
import java.util.Map;

public class Signup extends AppCompatActivity {

    public static final String TAG = "TAG";
    EditText fullname,Email,Password,phone,address;
    Button signup;
    //FirebaseDatabase mydata;
    FirebaseAuth Auth;
    FirebaseFirestore store;
    String UserId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);


        fullname= findViewById(R.id.fullname);
        Email = findViewById(R.id.signup_email);
        Password = findViewById(R.id.signup_password);
        phone = findViewById(R.id.phone_number);
        address = findViewById(R.id.address);
        signup = findViewById(R.id.signup_btn);
        Auth = FirebaseAuth.getInstance();

       // mydata = FirebaseDatabase.getInstance();
        store = FirebaseFirestore.getInstance();
        if(Auth.getCurrentUser() != null){

            startActivity(new Intent(getApplicationContext(),Car_list.class));
            finish();

        }


        signup.setOnClickListener(new View.OnClickListener() {


            @Override
            public void onClick(View v) {

                 final String name = fullname.getText().toString().trim();
                final String email = Email.getText().toString().trim();
                final String password = Password.getText().toString().trim();
                final String phoneNumber = phone.getText().toString().trim();
                final String Address = address.getText().toString().trim();
            //    final Data signupRecord = new Data(name,email,password,phoneNumber,Address);

                if(TextUtils.isEmpty(email)){


                     Email.setError("Please entered email");
                    return;
                }
                if(TextUtils.isEmpty(password)){

                    Password.setError("field is emapty");
                    return;
                }




                Auth.createUserWithEmailAndPassword(email,password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {

                        if(task.isSuccessful()){
                            Toast.makeText(Signup.this,"User Created",Toast.LENGTH_SHORT).show();

                            UserId = Auth.getCurrentUser().getUid();

                            DocumentReference documentReference = store.collection("users").document(UserId);
                            Map<String,Object> user = new HashMap<>();
                            user.put("fname",name);
                            user.put("email",email);
                            user.put("password",password);
                            user.put("phonenumber",phoneNumber);
                            user.put("address",Address);
                            documentReference.set(user).addOnSuccessListener(new OnSuccessListener<Void>() {
                                @Override
                                public void onSuccess(Void aVoid) {

                                    Log.d(TAG, "onSuccess: User Profile Create "+ UserId.toString());
                                    Log.i("User-detail",UserId.toString());
                                }
                            });
                            startActivity(new Intent(getApplicationContext(),Car_list.class));
                            finish();
                           //  mydata.getReference().child(Auth.getUid()).setValue(signupRecord);


                        }else{

                            Toast.makeText(Signup.this, "Error"+task.getException().getMessage(),Toast.LENGTH_SHORT).show();

                        }
                    }
                });
            }
        });

    }
}
