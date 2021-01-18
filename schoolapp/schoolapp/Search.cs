using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
namespace schoolapp
{
    public partial class Search : UserControl
    {
        public Search()
        {
            InitializeComponent();
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            string Source = (@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\schoolapp\schoolapp\student.mdf;Integrated Security=True");

            SqlConnection con = new SqlConnection(Source);
            try { 
            con.Open();
            MessageBox.Show("DB Connected");

            string sql = "Select* From Student WHERE Student_Id = " + int.Parse(textBox1.Text);


            SqlCommand cmd = new SqlCommand(sql,con);

            SqlDataReader dr = cmd.ExecuteReader();
            if(dr.Read())
            {
                    textBox2.Text = (dr["FirstName"].ToString());
                    textBox3.Text = (dr["LastName"].ToString());
                    textBox4.Text = (dr["CourseId"].ToString());
                    textBox5.Text = (dr["CourseName"].ToString());
                    textBox6.Text = (dr["Email"].ToString());
                    textBox7.Text = (dr["Phone"].ToString());

            }
            con.Close();
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
