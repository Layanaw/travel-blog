
<?php
include_once'database.php';
if(isset($_POST['email'])) {
$name = $_POST['name'];
$sql = "INSERT INTO employee (name) VALUES ('$name)"; if
(mysqli_query($conn, $sql)) {
echo "New record created successfully !"; } else { echo "Error: " . $sql . "
" . mysqli_error($conn); }
mysqli_close($conn); }
?>