<?php 
function xmlToJson($xmlPath, $jsonPath){
    $xmlString = file_get_contents($xmlPath);
    $xml = simplexml_load_string($xmlString);
    $json = json_encode($xml, JSON_PRETTY_PRINT);
    file_put_contents($jsonPath, $json);
}

if(isset($_FILES['xmlFile'])) {
    $xmlPath = $_FILES['xmlFile']['tmp_name'];
    $jsonPath = 'xml.json';
    xmlToJson($xmlPath, $jsonPath);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xml to json</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
    <label for="file">
        <input type="file" name="xmlFile" id="file">
        <p>Choose file</p>
    </label>
    <button type="submit" id="submit">Submit</button>
    <?php
    if(isset($_POST['submit'])) {
        if(isset($_FILES['xmlFile'])){
        $xmlPath = $_FILES['xmlFile']['tmp_name'];
        $jsonPath = 'xml.json';
        xmlToJson($xmlPath, $jsonPath);
        echo 'file Json anda telah siap';
    }}
    ?>
    </form>

    <a href="xml.json" download="xml.json">download</a>
</body>
</html>