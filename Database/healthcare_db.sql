-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 03:13 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcare_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `RECORD_ID` int(10) NOT NULL,
  `ROLE_CODE` int(10) DEFAULT NULL,
  `FIRST_NAME` varchar(100) DEFAULT NULL,
  `LAST_NAME` varchar(100) DEFAULT NULL,
  `ID_NUMBER` varchar(100) DEFAULT NULL,
  `ADMIN_ROLE` varchar(100) DEFAULT NULL,
  `ADMIN_USERNAME` varchar(100) DEFAULT NULL,
  `ADMIN_PASSWORD` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`RECORD_ID`, `ROLE_CODE`, `FIRST_NAME`, `LAST_NAME`, `ID_NUMBER`, `ADMIN_ROLE`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`) VALUES
(21, 1, 'newChamika', 'newDimantha', '961153301v', 'Service', 'chamika456', 'chamika456'),
(22, 1, 'newSandaru', 'newUpasara', '20102010v', 'Controller', 'sandaru123', 'sandaru999'),
(23, 1, 'newKamal', 'newPerera', '9564541v', 'Admin', 'kamal123', 'kamal123'),
(24, 1, 'Henry', 'Ford', '9611533g', 'Admin', 'henry', 'henry123'),
(33, 1, 'Chamika', 'dimantha', '961153301v', 'Customer Service', 'chamikamac', 'chamika123'),
(34, 1, 'Chamika', 'ffdfdf', '6969V', 'Inventory Manager', 'asd', 'asd'),
(35, 1, '', '', '', 'Choose Admin Role', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `RECORD_ID` int(11) NOT NULL,
  `ROLE_CODE` int(10) DEFAULT NULL,
  `PHARMACY_ID` varchar(100) DEFAULT NULL,
  `PHARMACY_NAME` varchar(100) DEFAULT NULL,
  `PHARMACY_ADDRESS` varchar(100) DEFAULT NULL,
  `PHARMACY_TELEPHONE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pharmacy`
--

INSERT INTO `pharmacy` (`RECORD_ID`, `ROLE_CODE`, `PHARMACY_ID`, `PHARMACY_NAME`, `PHARMACY_ADDRESS`, `PHARMACY_TELEPHONE`) VALUES
(1, 1, 'PHA_001', 'Central Pharmacy', '38/Main Road, Colombo', '0112533274'),
(2, 1, 'PHA_002', 'Epic Pharmacy', '50/Main Road, Jaffna', '011369874'),
(3, 1, 'PHA_003', 'Uni Pharma', '50/Main Road, galle', '0118965472'),
(4, 1, 'PHARMACY_001', 'New Pharmacy', '20 colombo', 'Ad5555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`RECORD_ID`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`RECORD_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `RECORD_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `pharmacy`
--
ALTER TABLE `pharmacy`
  MODIFY `RECORD_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
