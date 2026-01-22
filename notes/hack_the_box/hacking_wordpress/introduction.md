# Intro
## What is a Content Management System (CMS)?
Tool that helps building a website without coding everything from scratch.
### Core components
- Content Management Application (CMA): The interface used to add and manage content.
- Content Delivery Application (CDA): The backend that takes input from CMA and assembles the code into the website.

The CMSs provides:

- Extensibility without working directing with the website code.
- User management to provide fine-grained control over access permissions and roles.
- Media Management to easily upload and embeded photos and videos
- Proper version control.

Deciding for a CMS:

- Well maintained (periodic updates and upgrades).
- Built in security settings to harden the website.

# WordPress Structure
## Default WordPress File Structure
WordPress could be installed on Windows, Linux or Mac OSX host. Supposing a Linux web server we will require Linux operating system, Apache HTTP server, MySQL database, and PHP (LAMP stack) before installation. After installation files and directories will be accessible at `/var/www/html`
### File Structure
```Shell
.
├── index.php
├── license.txt
├── readme.html
├── wp-activate.php
├── wp-admin
├── wp-blog-header.php
├── wp-comments-post.php
├── wp-config.php
├── wp-config-sample.php
├── wp-content
├── wp-cron.php
├── wp-includes
├── wp-links-opml.php
├── wp-load.php
├── wp-login.php
├── wp-mail.php
├── wp-settings.php
├── wp-signup.php
├── wp-trackback.php
└── xmlrpc.php
```
## Key WordPress Files

- `index.php`: WordPress homepage.

- `license.txt`: contains WordPress installation info (e.g. version)

- `wp-activate.php`: used for the email activation process.

- `wp-admin`: folder that contain teh login page for administrator access and the backend dashboard. When logged the user could access to:

    - `/wp-admin/login.php`
    - `/wp-admin/wp-login.php`
    - `/login.php`
    - `/wp-login.php` (could be renamed)

- `xmlrp.php`: replaced with **REST API**, represents a feature that enables data to be transmitted with HTTP.

# WordPress Configuration File
`wp-config.php` contains information required by WordPress to connect to the database like:

- Db Name.
- Db Host.
- Db username and password.
- Auth keys and salts.
- Db table prefix.

## Key WordPress Directories
### `wp-content`
The main directory where plugins and themes are stored.
```Shell
.
├── index.php
├── plugins
└── themes
```
### `uploads/`
Is usually where any files uploaded to the platform are stored.

> [!TIP]
> These directories and files should be carefully enumerated as they may lead to contain sensitive data.

### `wp-includes`
Contains everything except for the administrative components and the themes that belong to the website. Is where core files are stored (e.g. certificates, fonts, JavaScript files, and widgets)

```Shell
.
├── <SNIP>
├── theme.php
├── update.php
├── user.php
├── vars.php
├── version.php
├── widgets
├── widgets.php
├── wlwmanifest.xml
├── wp-db.php
└── wp-diff.php
```

# WordPress User Roles

| Role | Description|
|------|------------|
|Administrator| add, delete users and posts, as well as editing source code|
|Editor| Publish and manage posts (including posts of other users)|
|Author| Publish and manager their own posts|
|Contributor| write and manage their posts but cannot publish theme|
|Subscriber| Browse posts and edit their profiles.|

> [!NOTE]
In order to get code execution we usually need to gain administrator access. In other cases, editors and authors might have access to certain vulnerable plugins.
