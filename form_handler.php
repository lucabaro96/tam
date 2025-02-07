<?php
// Connessione al database
$servername = "localhost";
$username = "Tamgroup_0225";
$password = "c454U7l^u";
$dbname = "tamgroup_1";

$conn = new mysqli($servername, $username, $password, $dbname);

// Controllo connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Ricezione dati dal form
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$type = $_POST['type'] ?? 'contatto'; // Differenzia tra contatti, preventivi, lavora con noi

// Prevenzione SQL Injection
$stmt = $conn->prepare("INSERT INTO form_submissions (name, email, message, type) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $message, $type);

if ($stmt->execute()) {
    echo "Successo! Il tuo messaggio è stato inviato.";
} else {
    echo "Errore: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
