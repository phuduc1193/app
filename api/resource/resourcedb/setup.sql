--
-- Genders
--
DROP TABLE IF EXISTS genders;
CREATE TABLE genders (
`id` int(2) NOT NULL auto_increment,
`gender` varchar(10) NOT NULL default '',
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `genders` VALUES (null, 'Male');
INSERT INTO `genders` VALUES (null, 'Female');

--
-- Phone Types
--
DROP TABLE IF EXISTS phone_types;
CREATE TABLE phone_types (
`id` int(2) NOT NULL auto_increment,
`type` varchar(10) NOT NULL default '',
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `phone_types` VALUES (null, 'Work');
INSERT INTO `phone_types` VALUES (null, 'Home');
INSERT INTO `phone_types` VALUES (null, 'Mobile');
INSERT INTO `phone_types` VALUES (null, 'Other');

--
-- Relationship Status
--
DROP TABLE IF EXISTS relationship_status;
CREATE TABLE relationship_status (
`id` int(2) NOT NULL auto_increment,
`status` varchar(100) NOT NULL default '',
`preposition` varchar(10) NULL default '',
`mark` varchar(20) NULL default '',
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `relationship_status` VALUES (null, 'Single', null, null);
INSERT INTO `relationship_status` VALUES (null, 'In a relationship', 'With', 'Anniversary');
INSERT INTO `relationship_status` VALUES (null, 'Engaged', 'To', 'Since');
INSERT INTO `relationship_status` VALUES (null, 'Married', 'To', 'Anniversary');
INSERT INTO `relationship_status` VALUES (null, 'It\'s complicated', 'With', 'Since');
INSERT INTO `relationship_status` VALUES (null, 'In open relationship', 'With', 'Anniversary');
INSERT INTO `relationship_status` VALUES (null, 'Separated', null, 'Since');
INSERT INTO `relationship_status` VALUES (null, 'Divorced', null, 'Since');
INSERT INTO `relationship_status` VALUES (null, 'Widowed', null, 'Since');