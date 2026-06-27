Hosting your local Laravel/Vue project on Nginx with PHP 8.4 involves two main steps:

1. **Building your Vue assets** so they are part of your Laravel application's `public` directory.
    
2. **Configuring Nginx** to serve the Laravel project, which will, in turn, serve your Vue application.
    

This guide assumes you have Nginx, PHP 8.4 (with the FPM extension), and your project code (Laravel backend, Vue frontend) on your local machine.

---

## 1. Prepare Your Project

For a local hosting setup, the simplest method is to build your Vue.js application and place the final, compiled assets (the JavaScript and CSS files) into your Laravel project's `public` directory.

### Build Your Vue.js Assets

In your Vue.js project's directory, run the production build command:

Bash

```
npm run build
```

This command will create a `dist` folder in your Vue project. You now need to move the contents of this `dist` folder into your Laravel project's `public` directory.

> **Note:** Many modern Laravel/Vue projects (like those using Inertia.js) are already set up to do this. If you are using Inertia or the Laravel-Vite plugin, you just need to run `npm run build` from your _Laravel project root_. This will automatically build and place the assets in the correct `public/build` directory.

After this step, your Laravel `public` folder should contain your compiled assets (e.g., `index.js`, `index.css`) or a `build` directory containing them.

---

## 2. Configure Nginx

You need to create a new "server block" (like a virtual host) for your project in Nginx.1

### Step 1: Create the Nginx Configuration File

First, create a new configuration file for your site in the `sites-available` directory.2 You can name it after your project (e.g., `myproject.local`).

Bash

```
sudo nano /etc/nginx/sites-available/myproject.local
```

### Step 2: Add the Server Block Configuration

Paste the following configuration into the file. Be sure to **change the placeholder values** (like `myproject.local` and the paths) to match your setup.

Nginx

```
server {
    listen 80;
    server_name myproject.local; # Use a .local domain for local hosting
    root /var/www/myproject/public; # 1. Set this to your project's 'public' folder

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    # 2. Main location block
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    # 3. Pass PHP scripts to PHP 8.4-FPM
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock; # 4. Check this path
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

#### Configuration Explained:

1. root /var/www/myproject/public;
    
    This is the most important line. It tells Nginx that your website's files are located in the public directory of your Laravel project, not the project root.
    
2. location / { ... }
    
    This block handles all incoming requests. The try_files directive is the key for both Laravel and your Vue app. It tells Nginx to:
    
    - First, look for a file that exactly matches the request (e.g., `/style.css`). This is how it serves your compiled Vue CSS and JS assets.
        
    - If not found, look for a directory with that name (e.g., `$uri/`).
        
    - If neither is found, it passes the request to `/index.php`. This is how Laravel's router takes over and handles your API routes and page loads.
        
3. location ~ \.php$ { ... }
    
    This block tells Nginx how to handle any request that ends in .php.3
    
4. fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
    
    This line passes the PHP script to the PHP-FPM processor. The path to the socket file (.sock) must match your PHP 8.4 installation.4 You can check the correct path in your PHP-FPM configuration file (often at /etc/php/8.4/fpm/pool.d/www.conf).
    

### Step 3: Enable the New Site

To enable your new configuration, you create a symbolic link from `sites-available` to `sites-enabled`:

Bash

```
sudo ln -s /etc/nginx/sites-available/myproject.local /etc/nginx/sites-enabled/
```

### Step 4: Test and Restart Nginx

First, test your configuration file for any syntax errors:

Bash

```
sudo nginx -t
```

If it reports `syntax is ok` and `test is successful`, you can safely restart Nginx to apply the changes:

Bash

```
sudo systemctl restart nginx
```

---

## 3. Update Your Local Hosts File

To make your computer recognize your new `myproject.local` domain, you must add it to your `hosts` file.

1. Open your `hosts` file with admin privileges:
    
    - **Linux/macOS:** `sudo nano /etc/hosts`
        
    - **Windows:** Open Notepad as Administrator and open `C:\Windows\System32\drivers\etc\hosts`
        
2. Add a new line at the bottom that points your new local domain to your local machine's IP (127.0.0.1):
    
    ```
    127.0.0.1   myproject.local
    ```
    
3. Save the file.
    

You should now be able to open `http://myproject.local` in your browser and see your fully hosted Laravel/Vue application.

---

## 4. Set File Permissions

A common final hurdle is file permissions.5 Nginx (running as `www-data`) needs to be able to write to your project's `storage` and `bootstrap/cache` directories.

From your Laravel project's root directory, run:

Bash

```
sudo chown -R $USER:www-data .
sudo chmod -R 775 storage bootstrap/cache
```

This makes your user the owner, adds the `www-data` group (which Nginx uses) to the files, and gives group-write permissions to the necessary folders.