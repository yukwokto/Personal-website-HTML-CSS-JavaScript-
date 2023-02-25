// const course = [
//     { "Icon": "", "Course Title": "Technical Mathematics for Computer Science", "Level": 1, "Course Code": "MAT8001c", "description": "Fundamental Mathematics for computer programmer." },
//     { "Icon": "", "Course Title": "Computer Essentials", "Level": 1, "Course Code": "CST8101", "description": "The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills." },
//     { "Icon": "", "Course Title": "Introduction to Computer Programming", "Level": 1, "Course Code": "CST8116", "description": "Develop introductory knowledge of computer programming with emphasis on problem analysis and design, using algorithms, with the Java programming language used to implement solution designs." },
//     { "Icon": "", "Course Title": "Introduction to Database", "Level": 1, "Course Code": "CST8215", "description": "Learning the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database." },
//     { "Icon": "", "Course Title": "Web Programming", "Level": 2, "Course Code": "CST8285", "description": "Developing basic skills of web programming, website design and implementation." },
//     { "Icon": "", "Course Title": "Object Oriented Programming (Java)", "Level": 2, "Course Code": "CST8284", "description": "Exploring object-oriented programming methodology using the Java programming language." },
//     { "Icon": "", "Course Title": "Operating System Fundamentals (GNU/Linux)", "Level": 2, "Course Code": "CST8102", "description": "Exploring the basic concepts and components of Operating Systems (OS) based on LINUX." },
//     { "Icon": "", "Course Title": "Database Systems", "Level": 2, "Course Code": "CST2355", "description": "Acquiring practical experience using market-leading object-relational database management systems like Oracle and MySQL." },
//     { "Icon": "", "Course Title": "Technical Communication for Engineering Technologies", "Level": 2, "Course Code": "ENL2019T", "description": "Exposed to exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics" }
// ]


// onkeyup="myFunction()"
const searchBar = document.getElementById("myInput")
searchBar.addEventListener("keyup", myFunction)

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//This code first selects the button and the table by their respective IDs. 
//Then, it adds an event listener to the button that sorts the table by Level.
// The sorting function first selects the table body and the table rows. 
//It then sorts the rows based on their Level value by comparing the Level values of each row using the parseInt() function to convert the Level value to an integer.
// The sorting function also includes a toggle that changes the sort order between ascending and descending with each click of the button.
// Finally, the sorting function appends the sorted rows back to the table body in the sorted order.

const sortBtn = document.getElementById('sortBtn');
const table = document.getElementById('myTable');
let ascending = true;

sortBtn.addEventListener('click', () => {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aValue = parseInt(a.querySelector('.level').textContent);
        const bValue = parseInt(b.querySelector('.level').textContent);

        if (aValue < bValue) {
            return ascending ? -1 : 1;
        } else if (aValue > bValue) {
            return ascending ? 1 : -1;
        } else {
            return 0;
        }
    });

    ascending = !ascending;

    rows.forEach((row) => {
        tbody.appendChild(row);
    });
});

// for sorting the course by either level 1 or 2
const showAll = document.getElementById("show-all")
const showL1 = document.getElementById("show-l1")
const showL2 = document.getElementById("show-l2")

showAll.addEventListener('click', () => { filterTable(0) })
showL1.addEventListener('click', () => { filterTable(1) })
showL2.addEventListener('click', () => { filterTable(2) })


function filterTable(level) {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) { // start form 1 because the table header needs to stay
      var levelCell = rows[i].getElementsByClassName("level")[0];
      if (level === 0) {
        rows[i].style.display = "";
      } else if (levelCell && levelCell.textContent === level.toString()) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  

// const level1Btn = document.getElementById("level1Btn");
// const level2Btn = document.getElementById("level2Btn");
// const rows = document.querySelectorAll("#myTable .item");

// // Initially hide all rows
// // rows.forEach(row => {
// //   row.style.display = "none";
// // });

// // Add event listener to show/hide level 1 rows
// let level1Visible = false;
// level1Btn.addEventListener("click", () => {
//   level1Visible = !level1Visible;
//   rows.forEach(row => {
//     if (row.querySelector(".level").textContent === "1") {
//       row.style.display = level1Visible ? "" : "none";
//     }
//   });
// });

// // Add event listener to show/hide level 2 rows
// let level2Visible = false;
// level2Btn.addEventListener("click", () => {
//   level2Visible = !level2Visible;
//   rows.forEach(row => {
//     if (row.querySelector(".level").textContent === "2") {
//       row.style.display = level2Visible ? "" : "none";
//     }
//   });
// });




// function filterTable(level) {
//     var table = document.getElementById("myTable");
//     var rows = table.getElementsByTagName("tr");
//     for (var i = 1; i < rows.length; i++) {
//       var row = rows[i];
//       var cells = row.getElementsByTagName("td");
//       if (cells[2].innerHTML == level) {
//         if (row.style.display === "none") {
//           row.style.display = "";
//         } else {
//           row.style.display = "none";
//         }
//       } else {
//         row.style.display = "";
//       }
//     }
//   }
  

// Get the buttons and table
// const level1Button = document.getElementById('level-1-button');
// const level2Button = document.getElementById('level-2-button');
// const table_ = document.getElementById('myTable');

// // Add click event listeners to the buttons
// level1Button.addEventListener('click', function () {
//     // Loop through each row in the table
//     for (let i = 1; i < table_.rows.length; i++) {
//         // Get the level column value for the current row
//         const level = table_.rows[i].cells[2].innerHTML;
//         // If the level is not 1, hide the row
//         if (level !== '1') {
//             table_.rows[i].style.display = 'none';
//         } else {
//             table_.rows[i].style.display = '';
//         }
//     }
// });

// level2Button.addEventListener('click', function () {
//     // Loop through each row in the table
//     for (let i = 1; i < table_.rows.length; i++) {
//         // Get the level column value for the current row
//         const level = table_.rows[i].cells[2].innerHTML;
//         // If the level is not 2, hide the row
//         if (level !== '2') {
//             table_.rows[i].style.display = 'none';
//         } else {
//             table_.rows[i].style.display = '';
//         }
//     }
// });




// const btnLevel1 = document.querySelector('#btn-level-1');
// const btnLevel2 = document.querySelector('#btn-level-2');
// const tableRows = document.querySelectorAll('.item');

// btnLevel1.addEventListener('click', () => {
//     tableRows.forEach(row => {
//         const levelCell = row.querySelector('.level');
//         if (levelCell.textContent !== '1') {
//             row.style.display = 'none';
//         } else {
//             row.style.display = '';
//         }
//     });
// });

// btnLevel2.addEventListener('click', () => {
//     tableRows.forEach(row => {
//         const levelCell = row.querySelector('.level');
//         if (levelCell.textContent !== '2') {
//             row.style.display = 'none';
//         } else {
//             row.style.display = '';
//         }
//     });
// });