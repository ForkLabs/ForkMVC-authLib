        CREATE TABLE `memberBox_sessions` (
          `session_id` int(11) NOT NULL AUTO_INCREMENT,
          `session_token` varchar(255) NOT NULL,
          `session_user` int(3) NOT NULL,
          `session_ip` varchar(20) NOT NULL,
          `session_useragent` text NOT NULL,
          `session_admin` int(1) NOT NULL,
          `session_time_initiated` int(20) NOT NULL,
          `session_time_expiration` int(20) NOT NULL,
          PRIMARY KEY (`session_id`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=latin1;
