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
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class LoginScreen extends AppCompatActivity {

    ProgressBar Mpgbar;
    Button login_btn;
    Button Signup_btn;
    EditText loginemail,loginpassword;
     FirebaseAuth Auth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_screen);

        Mpgbar = findViewById(R.id.pgbar);
        login_btn = findViewById(R.id.signin_btn);
        Signup_btn = findViewById(R.id.SignUp);
        loginemail = findViewById(R.id.signin_email);
        loginpassword = findViewById(R.id.signin_password);
        Auth = FirebaseAuth.getInstance();


        Signup_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent movetosignup = new Intent(LoginScreen.this,Signup.class);
                startActivity(movetosignup);

            }
        });

        login_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String email = loginemail.getText().toString().trim();
                String password = loginpassword.getText().toString().trim();

                if(TextUtils.isEmpty(email)){
                    loginemail.setError("Field is Empty");
                    return;

                }


                if(TextUtils.isEmpty(password)){
                    loginpassword.setError("Field is Empty");
                    return;

                }

                Auth.signInWithEmailAndPassword(email,password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                      if(task.isSuccessful()){

                          Toast.makeText(LoginScreen.this,"Login Successful",Toast.LENGTH_SHORT).show();
                          Mpgbar.setVisibility(View.GONE);
                          startActivity(new Intent(getApplicationContext(), Car_list.class));
                          finish();
                           Log.i("User",Auth.getCurrentUser().getUid().toString());


                      }

                      else {


                          Toast.makeText(LoginScreen.this,"Login Failed"+task.getException().getMessage(),Toast.LENGTH_SHORT).show();
                          startActivity(new Intent(getApplicationContext(),LoginScreen.class));


                      }

                    }

                });


            }
        });


    }
}
