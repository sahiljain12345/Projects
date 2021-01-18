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
    public partial class studentAddmission : Form
    {
        public studentAddmission()
        {
            InitializeComponent();
        }
        SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\schoolapp\schoolapp\student.mdf;Integrated Security=True");

        private void StudentAddmission_Load(object sender, EventArgs e)
        {

        }

        private void Submit_Click(object sender, EventArgs e)
        {
            try
            {

                string std_id = Student_Id.Text;
                string std_name = First_Name.Text;
                string stdlast_name = Last_Name.Text;
                string coursid = Course_id.Text;
                string coursename = Course_Name.Text;
                string email = Email.Text;
                string phone = Phn_number.Text;

                
                con.Open();
                string query = "INSERT INTO Student (Student_Id,FirstName,LastName,CourseId,CourseName,Email,Phone)Values('" + std_id + "','" + std_name + "','" + stdlast_name + "','" + coursid + "','" + coursename + "','" + email + "','" + phone + "')";
                SqlDataAdapter da = new SqlDataAdapter(query, con);
                 da.SelectCommand.ExecuteNonQuery();
                con.Close();


                MessageBox.Show("Instered Successfully");

             

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void Button2_Click(object sender, EventArgs e)
        {
            Student_Id.Text = "";
            First_Name.Text = "";
            Last_Name.Text = "";
            Course_id.Text = "";
            Course_Name.Text = "";
            Email.Text = "";
            Phn_number.Text = "";

        }
    }
}
