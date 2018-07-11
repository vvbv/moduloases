<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.


/**
 * Estrategia ASES
 *
 * @author     Camilo José Cruz Rivera
 * @package    block_ases
 * @copyright  2018 Camilo José Cruz Rivera <cruz.camilo@correounivalle.edu.co>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once('historic_academic_reports_lib.php');

  
 if(isset($_POST['codigo'])&&isset($_POST['programa'])&&isset($_POST['semestre'])&&isset($_POST['type'])&&$_POST['type']=="check_estimulo"){

    $nombre = "nombre aqui";
    $nombre_programa = $_POST['programa'];
    $semestre = $_POST['semestre'];
    echo get_posicion_estimulo($_POST['codigo'],$_POST['programa'],$_POST['semestre'] );
}
