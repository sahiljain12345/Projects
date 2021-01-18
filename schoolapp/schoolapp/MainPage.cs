using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace schoolapp
{
    public partial class MainPage : Form
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void MainPage_Load(object sender, EventArgs e)
        {
            timer1.Start();
            Show_Pannel.Hide();
        }

        private void Button3_Click(object sender, EventArgs e)
        {
          
        }

        private void PictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void Addmission_btn_Click(object sender, EventArgs e)
        {
            studentAddmission student = new studentAddmission();
            student.Show();
            
        }

        private void Button5_Click(object sender, EventArgs e)
        {
            Search search = new Search();
              Show_Pannel.Controls.Add(search);

            Show_Pannel.Show();
        }

        private void button6_Click(object sender, EventArgs e)
        {
           
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (pictureBox1.Visible == true)
            {

                pictureBox1.Visible = false;
                pictureBox2.Visible = true;
            }


            else if (pictureBox2.Visible == true)
            {

                pictureBox2.Visible = false;
                pictureBox3.Visible = true;
            }


            else if (pictureBox3.Visible == true)
            {

                pictureBox3.Visible = false;
                pictureBox4.Visible = true;
            }

            else if (pictureBox4.Visible == true)
            {

                pictureBox4.Visible = false;
                pictureBox1.Visible = true;
            }
        }
    }
}
