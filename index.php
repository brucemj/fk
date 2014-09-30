<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""
"http://www.w3.org/TR/html4/loose.dtd">
<HEAD>
    <script type="text/javascript" charset="utf-8" src="./jquery-1.7.2.min.js"></script>

    <script type="text/javascript" charset="utf-8" src="./fk.js"></script>
<style type="text/css">
    tr,td{text-align:center; background-color:#A7C942; width: 30px ; height: 30px; margin: 0px; padding: 0px; border: 0px }    
    table{width: 360px ; height: 630px ; margin: 0px; padding:0px; border: 0px; border-collapse:collapse }    
</style>
</HEAD>

<html>
<body onkeydown="keyDown(event)">
    
    <table>
        <?php 
        for($i=0; $i<21; $i++){
            echo '<tr class="row'. $i .'">';
            for($j=0; $j<12; $j++){
                echo '<td class="data'. $i."-".$j .'">';
                echo '.';
                echo '</td>';
            }
            echo '</tr>';
        }
        ?>
    </table>
</body>
</html>
