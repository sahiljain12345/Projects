using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Configuration;

namespace schoolapp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        string cs = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Login.mdf;Integrated Security=True";
        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Button1_Click(object sender, EventArgs e)
        {

            try {

                SqlConnection con = new SqlConnection(cs);
                SqlCommand cmd = new SqlCommand("Select*From Login where Username=@username and Password =@password",con);

                cmd.Parameters.AddWithValue("@username", txt_username.Text);
                cmd.Parameters.AddWithValue("@password", txt_password.Text);
                con.Open();
                SqlDataAdapter adapt = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                adapt.Fill(ds);
                con.Close();

                int count = ds.Tables[0].Rows.Count;

                if(count == 1)
                {
                    MessageBox.Show("Login Successful");
                    this.Hide();

                    MainPage Main = new MainPage();
                    Main.Show();


                }
                else

                {

                    MessageBox.Show("Login Failed");
                }

            }
            catch
            {

            }
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }
    }
}
