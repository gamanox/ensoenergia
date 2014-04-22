<?php





$allowedExts = array("gif", "jpeg", "jpg", "png");
$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
$uid = uniqid();
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png"))
&& ($_FILES["file"]["size"] < 2000000)
&& in_array($extension, $allowedExts))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br>";
    echo "Type: " . $_FILES["file"]["type"] . "<br>";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";
   

    if (file_exists("upload/" . $_FILES["file"]["name"]))
      {
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "upload/" . $uid . "." . $extension);
      
      echo "Stored in: " . "upload/" . $uid . "." . $extension;
      }
    }
  }
else
  {
  echo "Invalid file";
  }


$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$city = $_POST["city"];
$consumo = $_POST["consumo"];
$subject = $name . " lo contactó desde ensoenergia.com";
$message = '<html><body>';
$message .= '<h2>Formulario de contacto ENSO</h2>';
$message .= '<p>Mi nombnre es <b>' . $name . '</b>, soy de la ciudad de <b>' . $city . '</b>,mi teléfono es <b>' . $phone . '</b>. Actualmente tengo un consumo de <b>' . $consumo . ' kW/h</b>. Le adjunto mi recibo en el siguiente link -> ';
$message .= "<a href='http://ensoenergia.com/upload/" . $uid . "." . $extension . "' target='_blank'>" . "http://ensoenergia.com/upload/" . $uid . "." . $extension . "</a>";
$message .= '</body></html>';
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    
    // send mail
$headers = "From: " . $email . "\r\n";
      
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    mail("contacto@ensoenergia.com",$subject,$message,$headers);


?>