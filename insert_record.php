<?php
include("db_connection.php"); // Include the database connection file

// Sample data for insertion
$name = "name";
$email = "email";
$massage = "This is a test message.";

// SQL query to insert data into the table (assuming you have a table named 'contacts')
$sql = "INSERT INTO contacts (name, email, massage) VALUES ('$name', '$email', '$massage')";

if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>