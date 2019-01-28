<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'admin_novoacdn');

/** MySQL database username */
define('DB_USER', 'admin_novoacdn');

/** MySQL database password */
define('DB_PASSWORD', 'MeQkmoTxQmzBzpBN');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'wmDCd_[IOtCpm=`,JCJGn[HcxHP),*8Mf}YG7*0xBLg5W@[CKq(8Yr)B!&mww@z#');
define('SECURE_AUTH_KEY',  'E;}?W&$7`m|d*G#&a](.4Ij1L VTOB0}UPV]BeC<HROO~r5}LuLVsw.o7)XW|)J>');
define('LOGGED_IN_KEY',    'uhQ-w~o7Qq$hMitk_B!8D0KrX/8w!#XVy3anbmMdW`s9 :tOW:.j:gBABJoy82`*');
define('NONCE_KEY',        '40.Z~$ psyQ :1Dg`0Z/j>0%c+Ll[D:IN$X%0vw/I7fKk>3;yp*%#NGTi9])xo>b');
define('AUTH_SALT',        'Pm?r209lNCy8Yja3ydWu=mNMB;|O5z%PB4Y*jFVp;aQHWaCEu!puXn{-BQ}vqey#');
define('SECURE_AUTH_SALT', 'P}x(FP)MfOfW;p}YX=}CTma{hzp=Q#qA&E~O^:4KE[j~)}xmM(&jI+kg{W&Cgo]5');
define('LOGGED_IN_SALT',   '8+&`iAdAKx)*[54+n^H&W;M8b 8z$v{6}7gx78)(G((]r]K+M+VCdd/0WWELZ~i~');
define('NONCE_SALT',       'n7O{<0Eg_s9zZ!h6v*drJ7d]O+@LQvyhVufJ.TbU(7[k=*Cq&TE#4d)IJQgo,uty');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'acdn_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define('FS_METHOD', 'direct');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');