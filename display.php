<html>
    <head>
        <title>Displaying Student Data</title>
        <link rel="stylesheet" href="css/display.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap" rel="stylesheet">
    </head>
</html>

<?php

    include('connections/conn.php');
    error_reporting(0);

    $s = "SELECT * FROM form";
    $data = mysqli_query($con,$s);

    $total = mysqli_num_rows($data);

    if($total != 0)
    {
        ?>

        <h2 align="center"><mark>Displaying Student's Data</mark></h2>

        <center>
            <table border="1px" cellspacing="7" width="100%">
                <tr>
                    <th width="5%">Id</th>
                    <th width="12%">First-Name</th>
                    <th width="12%">Last-Name</thclass=>
                    <th width="15%">Password</th>
                    <th width="10%">Gender</thclass=>
                    <th width="5%">Std</thclass=>
                    <th width="25%">Address</th>
                    <th width="16%">Operations</th>
                </tr>

        <?php
        while($result = mysqli_fetch_assoc($data))
        {
            echo "<tr>
                    <td>".$result['id']."</td>
                    <td>".$result['fname']."</td>
                    <td>".$result['lname']."</td>
                    <td>".$result['password']."</td>
                    <td>".$result['gdr']."</td>
                    <td>".$result['std']."</td>
                    <td>".$result['address']."</td>
                    <td class='btn-cont'><a href='update.php?id=$result[id]'><input type='submit' value='Update' class='update btn'></a>

                    <a href='delete.php?id=$result[id]'><input type='submit' value='Delete' class='delete btn' onclick='return confermation()'></a></td>

                 </tr>";
        }
    }
    else{
        echo "No Record Found ! Please Insert First";
    }

?>
</table>
</center>

<script>
    function confermation() {
        return confirm('You Want Delete This Data ! This is not Recoverable...');
    }
</script>